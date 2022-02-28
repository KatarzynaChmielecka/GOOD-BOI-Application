const passport = require('passport');
const { isDogOwner } = require('../Tools/autorizationAdditionalTools');

const ROLE_NAME = {
  PARTICIPANT: 'participant',
  STAFF: 'staff',
  MANAGER: 'manager',
  ADMIN: 'admin',
};

function checkUser(req) {
  if (req.user._id.valueOf() === req.params.userId) {
    console.log('true');
    return true;
  } else {
    return false;
  }
}

module.exports.blockIfPublic = (req, res, next) => {
  if (req.access === 'public' || !req.user) {
    res.status(401).json({ success: false, message: 'unauthorized' });
  } else {
    next();
  }
};

module.exports.auth = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, function (err, user, info) {
    if (err) {
      res.status(500).json({ success: false, message: info });
    } else if (!user) {
      req.access = 'public';
      return next();
    } else {
      req.user = user;
      return next();
    }
  })(req, res, next);
};

module.exports.justUserAndAdmin = (req, res, next) => {
  if (checkUser(req)) {
    next();
  } else {
    this.isAdminStrict(req, res, next);
  }
};

module.exports.isAdminStrict = (req, res, next) => {
  if (req.user.portalRoles.includes(ROLE_NAME.ADMIN)) {
    next();
  } else {
    res.status(401).json({ success: false, message: 'unauthorized' });
  }
};

module.exports.isAdminOrPublic = (req, res, next) => {
  if (req.user.portalRoles.includes(ROLE_NAME.ADMIN)) {
    next();
  } else {
    req.access = 'public';
    next();
  }
};

module.exports.isManagerOrAdmin = (req, res, next) => {
  if (req.user.portalRoles.includes(ROLE_NAME.MANAGER)) {
    next();
  } else {
    this.isAdminStrict(req, res, next);
  }
};

module.exports.justUserStaffOrAdmin = (req, res, next) => {
  if (checkUser(req)) {
    console.log('user ok');
    next();
  } else if (req.user.portalRoles.includes(ROLE_NAME.STAFF)) {
    next();
  } else {
    this.isAdminStrict(req, res, next);
  }
};

module.exports.justStaffManagerOrAdmin = (req, res, next) => {
  if (
    req.user.portalRoles.includes(ROLE_NAME.STAFF) ||
    req.user.portalRoles.includes(ROLE_NAME.MANAGER)
  ) {
    next();
  } else {
    this.isAdminStrict(req, res, next);
  }
};

module.exports.dogOwnerAllRolesOrPublic = (req, res, next) => {
  if (!req.user) {
    (req.access = 'public'), next();
  } else if (isDogOwner(req.user, req.params.dogId)) {
    next();
  } else if (req.user.portalRoles.includes(ROLE_NAME.STAFF)) {
    next();
  } else {
    this.isAdminOrPublic(req, res, next);
  }
};

module.exports.justDogOwnerStaffOrAdmin = (req, res, next) => {
  if (isDogOwner(req.user, req.params.dogId)) {
    next();
  } else if (req.user.portalRoles.includes(ROLE_NAME.STAFF)) {
    next();
  } else {
    this.isAdminStrict(req, res, next);
  }
};

module.exports.justDogOwnerOrAdmin = (req, res, next) => {
  if (isDogOwner(req.user, req.params.dogId)) {
    next();
  } else {
    this.isAdminStrict(req, res, next);
  }
};
