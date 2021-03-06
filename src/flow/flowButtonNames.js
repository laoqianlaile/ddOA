const buttonName = {
  'tj': '提交',
  'th': '退回',
  'jq': '加签',
  'zb': '转办',
  'qs': '签收',
  'bh': '驳回',
  'cy': '传阅',
  'hq': '会签',
  'zf': '作废'
}

const buttonKey = {
  '提交': 'tj',
  '退回': 'th',
  '加签': 'jq',
  '转办': 'zb',
  '签收': 'qs',
  '驳回': 'bh',
  '传阅': 'cy',
  '会签': 'hq',
  '作废': 'zf'
}

const rightButtonName = ['待办任务', '申请中', '已办理', '已结束']

// warn: 和获取流程列表的逻辑相关，轻易不要动
const flowType = {
  '待办任务': 0,
  '申请中': 1,
  '已办理': 2,
  '已结束': 3
}

const flowTile = {
  0: '待办任务',
  1: '申请中',
  2: '已办理',
  3: '已结束'
}

export default {
  buttonKey,
  buttonName,
  rightButtonName,
  flowType,
  flowTile
};
