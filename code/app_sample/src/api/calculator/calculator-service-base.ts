import { IContext, IParam, EntityService } from '@core';

/**
 * 计算器服务对象基类
 *
 * @export
 * @class Calculator
 * @extends {EntityBaseService}
 */
export class CalculatorServiceBase extends EntityService {
  
  /**
  * Creates an instance of CalculatorServiceBase.
  *
  * @param {*} [opts={}]
  * @memberof CalculatorServiceBase
  */
  constructor(opts: IParam = {}) {
      super(opts,'Calculator');
  }

  /**
   * 初始化基础数据
   *
   * @protected
   * @memberof ChartDataServiceBase
   */
  protected initBasicData() {
    this.appEntityCodeName = 'calculator';
    this.appEntityCodeNames = 'calculators';
    this.appEntityKeyCodeName = 'calculatorid';
      this.appEntityTextCodeName = 'calculatorname';
    // 初始化关系实体路径集合
    this.deResPaths = [
        [{"pathName":"calculators","parameterName":"calculator"}]
    ]
  }

  /**
   * Click0
   *
   * @param {IContext} [context={}]
   * @param {IParam} [data = {}]
   * @returns {Promise<any>}
   * @memberof CalculatorServiceBase
   */
  public async Click0(context: IContext = {}, data: IParam = {}): Promise<any> {
  	eval(`if(!data.input) {
   data.input='';
}
data.input=data.input+'0';`);
  	const res = {
  		ok: true,
  		status: 200,
  		data: data
  	}
    return res;
  }

  /**
   * Click1
   *
   * @param {IContext} [context={}]
   * @param {IParam} [data = {}]
   * @returns {Promise<any>}
   * @memberof CalculatorServiceBase
   */
  public async Click1(context: IContext = {}, data: IParam = {}): Promise<any> {
  	eval(`if(!data.input) {
   data.input='';
}
data.input=data.input+'1';`);
  	const res = {
  		ok: true,
  		status: 200,
  		data: data
  	}
    return res;
  }

  /**
   * Click2
   *
   * @param {IContext} [context={}]
   * @param {IParam} [data = {}]
   * @returns {Promise<any>}
   * @memberof CalculatorServiceBase
   */
  public async Click2(context: IContext = {}, data: IParam = {}): Promise<any> {
  	eval(`if(!data.input) {
   data.input='';
}
data.input=data.input+'2';`);
  	const res = {
  		ok: true,
  		status: 200,
  		data: data
  	}
    return res;
  }

  /**
   * Click3
   *
   * @param {IContext} [context={}]
   * @param {IParam} [data = {}]
   * @returns {Promise<any>}
   * @memberof CalculatorServiceBase
   */
  public async Click3(context: IContext = {}, data: IParam = {}): Promise<any> {
  	eval(`if(!data.input) {
   data.input='';
}
data.input=data.input+'3';`);
  	const res = {
  		ok: true,
  		status: 200,
  		data: data
  	}
    return res;
  }

  /**
   * Click4
   *
   * @param {IContext} [context={}]
   * @param {IParam} [data = {}]
   * @returns {Promise<any>}
   * @memberof CalculatorServiceBase
   */
  public async Click4(context: IContext = {}, data: IParam = {}): Promise<any> {
  	eval(`if(!data.input) {
   data.input='';
}
data.input=data.input+'4';`);
  	const res = {
  		ok: true,
  		status: 200,
  		data: data
  	}
    return res;
  }

  /**
   * Click5
   *
   * @param {IContext} [context={}]
   * @param {IParam} [data = {}]
   * @returns {Promise<any>}
   * @memberof CalculatorServiceBase
   */
  public async Click5(context: IContext = {}, data: IParam = {}): Promise<any> {
  	eval(`if(!data.input) {
   data.input='';
}
data.input=data.input+'5';`);
  	const res = {
  		ok: true,
  		status: 200,
  		data: data
  	}
    return res;
  }

  /**
   * Click6
   *
   * @param {IContext} [context={}]
   * @param {IParam} [data = {}]
   * @returns {Promise<any>}
   * @memberof CalculatorServiceBase
   */
  public async Click6(context: IContext = {}, data: IParam = {}): Promise<any> {
  	eval(`if(!data.input) {
   data.input='';
}
data.input=data.input+'6';`);
  	const res = {
  		ok: true,
  		status: 200,
  		data: data
  	}
    return res;
  }

  /**
   * Click7
   *
   * @param {IContext} [context={}]
   * @param {IParam} [data = {}]
   * @returns {Promise<any>}
   * @memberof CalculatorServiceBase
   */
  public async Click7(context: IContext = {}, data: IParam = {}): Promise<any> {
  	eval(`if(!data.input) {
   data.input='';
}
data.input=data.input+'7';`);
  	const res = {
  		ok: true,
  		status: 200,
  		data: data
  	}
    return res;
  }

  /**
   * Click8
   *
   * @param {IContext} [context={}]
   * @param {IParam} [data = {}]
   * @returns {Promise<any>}
   * @memberof CalculatorServiceBase
   */
  public async Click8(context: IContext = {}, data: IParam = {}): Promise<any> {
  	eval(`if(!data.input) {
   data.input='';
}
data.input=data.input+'8';`);
  	const res = {
  		ok: true,
  		status: 200,
  		data: data
  	}
    return res;
  }

  /**
   * Click9
   *
   * @param {IContext} [context={}]
   * @param {IParam} [data = {}]
   * @returns {Promise<any>}
   * @memberof CalculatorServiceBase
   */
  public async Click9(context: IContext = {}, data: IParam = {}): Promise<any> {
  	eval(`if(!data.input) {
   data.input='';
}
data.input=data.input+'9';`);
  	const res = {
  		ok: true,
  		status: 200,
  		data: data
  	}
    return res;
  }

  /**
   * ClickBackspace
   *
   * @param {IContext} [context={}]
   * @param {IParam} [data = {}]
   * @returns {Promise<any>}
   * @memberof CalculatorServiceBase
   */
  public async ClickBackspace(context: IContext = {}, data: IParam = {}): Promise<any> {
  	eval(`if(data.input){
  data.input=data.input.substring(0,data.input.length-1);
}
if(data.expression){
  data.expression=data.expression.substring(0,data.expression.length-1);
}
`);
  	const res = {
  		ok: true,
  		status: 200,
  		data: data
  	}
    return res;
  }

  /**
   * ClickClear
   *
   * @param {IContext} [context={}]
   * @param {IParam} [data = {}]
   * @returns {Promise<any>}
   * @memberof CalculatorServiceBase
   */
  public async ClickClear(context: IContext = {}, data: IParam = {}): Promise<any> {
  	eval(`data.input='';
data.expression='';`);
  	const res = {
  		ok: true,
  		status: 200,
  		data: data
  	}
    return res;
  }

  /**
   * ClickEq
   *
   * @param {IContext} [context={}]
   * @param {IParam} [data = {}]
   * @returns {Promise<any>}
   * @memberof CalculatorServiceBase
   */
  public async ClickEq(context: IContext = {}, data: IParam = {}): Promise<any> {
  	eval(`if(data.input) {
  data.expression=data.input+'=';
  data.input=eval(data.input);
}
`);
  	const res = {
  		ok: true,
  		status: 200,
  		data: data
  	}
    return res;
  }

  /**
   * ClickExcept
   *
   * @param {IContext} [context={}]
   * @param {IParam} [data = {}]
   * @returns {Promise<any>}
   * @memberof CalculatorServiceBase
   */
  public async ClickExcept(context: IContext = {}, data: IParam = {}): Promise<any> {
  	eval(`if(!data.input) {
   data.input='';
}
data.input=data.input+'/';`);
  	const res = {
  		ok: true,
  		status: 200,
  		data: data
  	}
    return res;
  }

  /**
   * ClickMinus
   *
   * @param {IContext} [context={}]
   * @param {IParam} [data = {}]
   * @returns {Promise<any>}
   * @memberof CalculatorServiceBase
   */
  public async ClickMinus(context: IContext = {}, data: IParam = {}): Promise<any> {
  	eval(`if(!data.input) {
   data.input='';
}
data.input=data.input+'-';`);
  	const res = {
  		ok: true,
  		status: 200,
  		data: data
  	}
    return res;
  }

  /**
   * ClickMultiply
   *
   * @param {IContext} [context={}]
   * @param {IParam} [data = {}]
   * @returns {Promise<any>}
   * @memberof CalculatorServiceBase
   */
  public async ClickMultiply(context: IContext = {}, data: IParam = {}): Promise<any> {
  	eval(`if(!data.input) {
   data.input='';
}
data.input=data.input+'*';`);
  	const res = {
  		ok: true,
  		status: 200,
  		data: data
  	}
    return res;
  }

  /**
   * ClickPlus
   *
   * @param {IContext} [context={}]
   * @param {IParam} [data = {}]
   * @returns {Promise<any>}
   * @memberof CalculatorServiceBase
   */
  public async ClickPlus(context: IContext = {}, data: IParam = {}): Promise<any> {
  	eval(`if(!data.input) {
   data.input='';
}
data.input=data.input+'+';`);
  	const res = {
  		ok: true,
  		status: 200,
  		data: data
  	}
    return res;
  }

  /**
   * ClickPoint
   *
   * @param {IContext} [context={}]
   * @param {IParam} [data = {}]
   * @returns {Promise<any>}
   * @memberof CalculatorServiceBase
   */
  public async ClickPoint(context: IContext = {}, data: IParam = {}): Promise<any> {
  	eval(`if(!data.input) {
   data.input='';
}
data.input=data.input+'.';`);
  	const res = {
  		ok: true,
  		status: 200,
  		data: data
  	}
    return res;
  }

  /**
   * InitSelectPanel
   *
   * @param {IContext} [context={}]
   * @param {IParam} [data = {}]
   * @returns {Promise<any>}
   * @memberof CalculatorServiceBase
   */
  public async InitSelectPanel(context: IContext = {}, data: IParam = {}): Promise<any> {
  	eval(`data.part1=1;
data.part2=2;
data.part3=3;`);
  	const res = {
  		ok: true,
  		status: 200,
  		data: data
  	}
    return res;
  }

}