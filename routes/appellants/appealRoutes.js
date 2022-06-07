const express = require('express');
const router = express.Router();
const { validationResult } = require('express-validator');

const auth = require('../../middleware/auth');

//  Model
const Appeal = require('../../models/Appeal');
const AppealState = require('../../models/AppealState');
const validateInputAppeal = require('../../validation/appeal');

// @route Post api/appellant/appeal
// @desc  Create an  Appeal
// @access Private

router.post('/appeals', validateInputAppeal, auth, async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        // return res.status(400).json({ errors: errors.array() });
        let errObj = {};
        errors.array().map((error) => {
            errObj[error.param] = error.msg;
        });
        return res.status(400).json(errObj);
    }

    const {
        first_name,
        last_name,
        ar_line1,
        ar_line2,
        ar_landmark,
        ar_city,
        ar_district,
        ar_pin,
        ar_state,
        ar_country,
        as_line1,
        as_line2,
        as_landmark,
        as_city,
        as_district,
        as_pin,
        as_state,
        as_country,
        appellant_mobile_no,
        appellant_email_id,
        res_first_name,
        res_last_name,
        res_ao_line1,
        res_ao_line2,
        res_ao_landmark,
        res_ao_city,
        res_ao_district,
        res_ao_pin,
        res_ao_state,
        res_ao_country,
        res_as_line1,
        res_as_line2,
        res_as_landmark,
        res_as_city,
        res_as_district,
        res_as_pin,
        res_as_state,
        res_as_country,
        res_mobile_no,
        res_email_id,
        reg_num,
        is_limitation_specified,
        reason_for_delay,
        facts_of_case,
        ground_of_appeal,
        reliefs_sought,
        interim_order,
        is_matter_pending,
    } = req.body;

    const appellantId = req.user.id;

    try {
        const appeal = Appeal.build({
            first_name,
            last_name,
            ar_line1,
            ar_line2,
            ar_landmark,
            ar_city,
            ar_district,
            ar_pin,
            ar_state,
            ar_country,
            as_line1,
            as_line2,
            as_landmark,
            as_city,
            as_district,
            as_pin,
            as_state,
            as_country,
            appellant_mobile_no,
            appellant_email_id,
            res_first_name,
            res_last_name,
            res_ao_line1,
            res_ao_line2,
            res_ao_landmark,
            res_ao_city,
            res_ao_district,
            res_ao_pin,
            res_ao_state,
            res_ao_country,
            res_as_line1,
            res_as_line2,
            res_as_landmark,
            res_as_city,
            res_as_district,
            res_as_pin,
            res_as_state,
            res_as_country,
            res_mobile_no,
            res_email_id,
            reg_num,
            is_limitation_specified,
            reason_for_delay,
            facts_of_case,
            ground_of_appeal,
            reliefs_sought,
            interim_order,
            is_matter_pending,
            appellantId,
        });

        await appeal.save();

        const appealState = AppealState.build({
            appellant: 0,
            receptionist: 1,
            registrar: 0,
            bench: 0,
            appealId: appeal.id,
        });

        await appealState.save();

        res.json(appeal);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
});

// @route GET api/appellant/appeals
// @desc  View all appeals
// @access Private

router.get('/appeals', auth, async (req, res) => {
    try {
        const appeals = await Appeal.findAll({
            where: {
                appellantId: req.user.id,
            },
        });

        res.json(appeals);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
});

// @route Post api/appellants/appeal/receptionist
// @desc  View new Appeals - with receptionist
// @access Private
// router.get('/receptionist', auth, async (req, res) => {
//     try {
//         // find all appeal where appealState is receptionist:1
//         const appealIds = await AppealState.findAll({
//             attributes: ['appealId'],
//             where: {
//                 receptionist: 1,
//             },
//         });

//         // return an array of appealIds in the form [{appealId: 3}, {appealId: 4}]
//         const appealIdsRaw = appealIds.map((appealId) => {
//             return appealId.get({ plain: true });
//         });

//         // returns an array of appealIds in the form [3,4]
//         const appealIdsArray = appealIdsRaw.map((appealId) => {
//             return appealId.appealId;
//         });

//         const appeals = await Appeal.findAll({
//             where: {
//                 id: appealIdsArray,
//             },
//         });

//         res.json(appeals);
//     } catch (err) {
//         console.log(err);
//         res.status(500).send('Server Error');
//     }
// });

// @route Post api/appellants/appeal/receptionist/id/forward
// @desc  forward to registrar
// @access Private
// router.put('/receptionist/:id/forward', auth, async (req, res) => {
//     try {
//         const receptionist = await AppealState.findOne({
//             attributes: ['receptionist'],
//             where: {
//                 appealId: req.params.id,
//             },
//         });
//         // console.log(receptionist.get({ plain: true }).receptionist);
//         // receptionist.get({ plain: true }).receptionist - check for receptionist value in status table AppealStates
//         if (receptionist.get({ plain: true }).receptionist) {
//             await AppealState.update(
//                 {
//                     appellant: 0,
//                     receptionist: 0,
//                     registrar: 1,
//                     bench: 0,
//                 },
//                 {
//                     where: { appealId: req.params.id },
//                 }
//             );

//             res.json({ msg: 'table updated' });
//         } else {
//             res.json({ msg: 'appeal is not with the receptionist' });
//         }
//     } catch (err) {
//         console.log(err.message);
//         res.status(500).send('Server Error');
//     }
// });

module.exports = router;
