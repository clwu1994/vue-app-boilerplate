const strategies = {
  isNonEmpty(value, errorMsg) {
    if (!value) {
      return errorMsg;
    }
  },
  minLength(value, length, errorMsg) {
    if (value.length < length) {
      return errorMsg;
    }
  },
  isMobile(value, errorMsg) {
    if (!/^1[3456789]\d{9}$/.test(value)) {
      return errorMsg;
    }
  },
  isCaptcha(value, errorMsg) {
    if (!/^\d{6}$/.test(value)) {
      return errorMsg;
    }
  },
  regex(value, regStr, errorMsg) {
    if (!eval(regStr).test(value)) {
      return errorMsg;
    }
  }
};

/**
 *
 * @description: 策略模式封装校验类
 * @example:
 * const validator = new Validator();
 * validator.add(userName, [
 *  {strategy: 'isNonEmpty', errorMsg: '用户名不能为空'},
 *  {strategy: 'minLength:6', errorMsg: '用户名长度不能小于6'}
 * ])
 * validator.add(nickName, {strategy: 'regex:/^[\w-]{2,20}$/', errorMsg: '请输入2-20个字符'})
 * const errorMsg = validator.start();
 * if (errorMsg) Toast(errorMsg)
 */
class Validator {
  constructor() {
    this.cache = [];
  }
  _add(value, { strategy, errorMsg }) {
    const strategyArr = strategy.split(":");
    this.cache.push(() => {
      const strategy = strategyArr.shift();
      strategyArr.unshift(value);
      strategyArr.push(errorMsg);
      return strategies[strategy].apply(this, strategyArr);
    });
  }
  add(value, rules) {
    if (Array.isArray(rules)) {
      for (let i = 0, rule; (rule = rules[i++]); ) {
        this._add(value, rule);
      }
    } else if (Object.prototype.toString.call(rules) === "[object Object]") {
      this._add(value, rules);
    }
    return this;
  }
  start() {
    for (let i = 0, fun; (fun = this.cache[i++]); ) {
      const errorMsg = fun();
      if (errorMsg) return errorMsg;
    }
  }
}

export const validate = () => new Validator();
