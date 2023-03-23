const passport = require('passport')
const {Strategy} = require('passport-local').Strategy
const {User, Role, Permission} = require('../models')
const md5 = require('md5')