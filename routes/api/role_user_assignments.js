const express = require('express');
const router = express.Router();

// Role User Assignment API Controller
const api_role_user_assign_controller = require('../../controllers/api/index')
  .role_user_assignments;

router.param('role_id', require('../../controllers/api/index').roles.load_role);
router.param('userId', require('../../controllers/api/index').users.load_user);

// Routes for role_user_assignments
router.get('/', api_role_user_assign_controller.index);
router.get('/:userId/roles', api_role_user_assign_controller.info);
router.post('/:userId/roles/:role_id', api_role_user_assign_controller.create);
router.delete(
  '/:userId/roles/:role_id',
  api_role_user_assign_controller.delete
);

module.exports = router;
