/* eslint-disable @typescript-eslint/no-unsafe-call */
import _ from 'preval.macro';
// import { SetReturnType } from 'type-fest';

const importExport = `
  const fs = require('fs');
  const path = require('path');
  module.exports = fs.readFileSync(path.join(__dirname, 'templates', '`;
const tail = ".md'), 'utf8')";

// const _ = _ as SetReturnType<typeof _, string>;

/**
 * 在下面的代码里注册模板，方便在生成器里使用
 */
export const templates = {
  空白: '',
  '360 评估': _`${importExport}360 评估${tail}` as string,
  夸夸: _`${importExport}夸夸${tail}` as string,
};