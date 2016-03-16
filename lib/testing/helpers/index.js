/**
 * @module denali
 * @submodule testing
 */
import request from './request';
import createApplication from './create-application';
import getHeader from './get-header';
import setHeader from './set-header';
import removeHeader from './remove-header';
import lookup from './lookup';
import state from './global-state';

/**
 * A set of helpers for testing Denali applications
 *
 * @class helpers
 * @static
 */
export default {
  request,
  createApplication,
  getHeader,
  setHeader,
  removeHeader,
  lookup,
  state
};