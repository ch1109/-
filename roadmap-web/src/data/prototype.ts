// Auto-generated from dist prototype data
// 导入增强版场景数据
import { enhancedScenarios } from './prototype-enhanced';

export const prototypeModeSummaries = {
  "standby": "面向来访客户提供欢迎与业务导航，降低首次体验成本。",
  "active": "陪伴用户实时办理业务，提醒隐私与合规要点。"
} as const;

export const prototypeModeNotes = {
  "standby": [
    "动态识别新老客户，切换欢迎语与推荐内容。",
    "放大虚拟人表情与手势，引导触屏或语音操作。",
    "支持隐私模式提示，保护客户对话内容安全。"
  ],
  "active": [
    "同步展示当前办理事项与状态提醒用户下一步。",
    "可一键邀请人工客服接力处理复杂问题。",
    "自动生成业务小结并推送给客户与柜面人员。"
  ]
} as const;

export const prototypeWorkspaceLegend = {
  "standby": {
    "title": "当日热门业务提醒",
    "description": "展示高频咨询项目，让客户快速了解可自助办理的服务。"
  },
  "active": {
    "title": "当前办理焦点",
    "description": "根据实时需求推荐下一步操作，并同步柜台所需资料。"
  }
} as const;

export const prototypeReminders = {
  "standby": "建议优先推荐无需排队的线上业务，并在隐私模式下提醒用户保护个人信息。",
  "active": "办理完成后请推送短信回执，同时同步人工客服确认资料已齐备。"
} as const;

export const prototypeQuickTags = [
  "热门业务",
  "业务导航",
  "快速取号",
  "智能办理",
  "使用指导"
] as const;

export const prototypeTiles = [
  {
    "id": "account",
    "title": "账户管理",
    "description": "开卡、挂失、密码管理、账户升级",
    "icon": "🪪",
    "cardBg": "linear-gradient(135deg, #eef3ff, #ffffff)",
    "iconColor": "#1d4ed8",
    "borderColor": "rgba(79, 125, 243, 0.25)"
  },
  {
    "id": "query",
    "title": "查询业务",
    "description": "账户查询、交易明细、积分服务",
    "icon": "🔍",
    "cardBg": "linear-gradient(135deg, #f1e9ff, #ffffff)",
    "iconColor": "#7e22ce",
    "borderColor": "rgba(168, 85, 247, 0.25)"
  },
  {
    "id": "sign",
    "title": "业务签约",
    "description": "电子渠道签约、银转通道、手机认证",
    "icon": "✍️",
    "cardBg": "linear-gradient(135deg, #ffeaf4, #ffffff)",
    "iconColor": "#db2777",
    "borderColor": "rgba(244, 114, 182, 0.25)"
  },
  {
    "id": "transfer",
    "title": "转账汇款",
    "description": "跨行汇款、实时转账、入境通道",
    "icon": "🔄",
    "cardBg": "linear-gradient(135deg, #e9f9ff, #ffffff)",
    "iconColor": "#0f766e",
    "borderColor": "rgba(6, 182, 212, 0.25)"
  },
  {
    "id": "deposit",
    "title": "储蓄存款",
    "description": "活期存款、定期存单、智能存款",
    "icon": "💰",
    "cardBg": "linear-gradient(135deg, #fff6ea, #ffffff)",
    "iconColor": "#b45309",
    "borderColor": "rgba(245, 158, 11, 0.28)"
  },
  {
    "id": "invest",
    "title": "投资理财",
    "description": "理财产品、基金、风险测评",
    "icon": "📈",
    "cardBg": "linear-gradient(135deg, #f3fff3, #ffffff)",
    "iconColor": "#047857",
    "borderColor": "rgba(52, 211, 153, 0.25)"
  },
  {
    "id": "public",
    "title": "政务民生",
    "description": "社保服务、水电缴费、通办业务",
    "icon": "🏛️",
    "cardBg": "linear-gradient(135deg, #effcff, #ffffff)",
    "iconColor": "#0369a1",
    "borderColor": "rgba(14, 165, 233, 0.25)"
  },
  {
    "id": "credit",
    "title": "信用卡业务",
    "description": "账单查询、积分兑换、自动还款",
    "icon": "💳",
    "cardBg": "linear-gradient(135deg, #f0edff, #ffffff)",
    "iconColor": "#4338ca",
    "borderColor": "rgba(99, 102, 241, 0.28)"
  },
  {
    "id": "cash",
    "title": "现金业务",
    "description": "大额取现、小额存款、假币识别",
    "icon": "💵",
    "cardBg": "linear-gradient(135deg, #f1fffc, #ffffff)",
    "iconColor": "#0f766e",
    "borderColor": "rgba(45, 212, 191, 0.28)"
  }
] as const;

export const prototypeInsights = [
  {
    "id": "peak",
    "title": "高峰提示",
    "content": "当前柜面排队 12 人，建议推荐“电子渠道预约”以分流人流。"
  },
  {
    "id": "smart",
    "title": "智能引导",
    "content": "基于客户画像，优先展示财富产品申购与限额设置两个入口。"
  }
] as const;

export const prototypeQuickPrompts = [
  "预约柜台办理业务",
  "调整手机银行限额",
  "了解最新理财活动"
] as const;

export const prototypeDialogue = [
  {
    "speaker": "user",
    "content": "我想把手机银行的转账限额调高，需要准备什么？"
  },
  {
    "speaker": "agent",
    "content": "已为您定位到“账户/电话限额设置”，稍后推送步骤和安全提醒，要进入操作吗？"
  },
  {
    "speaker": "user",
    "content": "好，同时帮我预约一个周末的柜台，想再办一张借记卡。"
  },
  {
    "speaker": "agent",
    "content": "预约已提交，您将收到短信确认。若需人工协助，可随时呼叫客服接力。"
  }
] as const;

export const prototypePersonaControls = [
  {
    "id": "care",
    "label": "关怀模式"
  },
  {
    "id": "privacy",
    "label": "隐私模式"
  },
  {
    "id": "assistant",
    "label": "人工客服"
  }
] as const;

export const prototypeScenarios = [
  {
    "id": "agent",
    "buttonLabel": "待机态 → AI工作模式",
    "context": {
      "childAgeLabel": "3 岁",
      "investmentWindow": "15 年",
      "monthlyInvest": "2800",
      "expectedReturn": "6-9% / 年",
      "successRate": "89%",
      "maxDrawdown": "-15%"
    },
    "steps": [
      {
        "id": "agent-standby",
        "time": "T=0s",
        "title": "待机画布",
        "mode": "standby",
        "duration": 2600,
        "persona": {
          "badge": "欢迎模式",
          "speech": "您好，欢迎光临，随时告诉我想办的事情。",
          "notes": [
            "热门入口已点亮",
            "隐私模式提示可切换"
          ]
        },
        "workspace": {
          "badge": "待机画布",
          "headline": "热门业务矩阵",
          "description": "九宫格快捷入口",
          "tags": [
            "语音就绪",
            "触控就绪"
          ],
          "cards": [
            {
              "badge": "AI GUIDE",
              "title": "理财专家服务",
              "value": "可一键开启",
              "description": "进入 8 分钟教育金规划",
              "tone": "primary"
            },
            {
              "badge": "热门 TOP3",
              "title": "理财申购",
              "value": "80% 指向",
              "description": "智能推荐限额调整 / 智能存款",
              "tone": "neutral"
            },
            {
              "badge": "大厅洞察",
              "title": "排队 12 人",
              "value": "电子预约建议",
              "description": "可直接切换手机银行",
              "tone": "info"
            }
          ],
          "keyFacts": [
            {
              "label": "热门入口",
              "value": "9",
              "status": "done"
            },
            {
              "label": "快捷标签",
              "value": "5",
              "status": "done"
            }
          ]
        },
        "chat": {
          "badge": "欢迎对话",
          "messages": [
            {
              "role": "assistant",
              "content": "AI 小智已就绪，请直接说出您的需求或点击屏幕。"
            }
          ],
          "quickReplies": [
            "我要理财",
            "调整限额",
            "查看隐私模式"
          ]
        }
      },
      {
        "id": "agent-voice",
        "time": "T=3s",
        "title": "语音唤醒",
        "mode": "standby",
        "duration": 2400,
        "persona": {
          "badge": "倾听中",
          "speech": "正在解析您的语音指令。",
          "notes": [
            "麦克风唤醒成功"
          ]
        },
        "workspace": {
          "badge": "意图监听",
          "headline": "语音捕获",
          "description": "等待解析",
          "tags": [
            "ASR 运行中"
          ],
          "cards": [
            {
              "badge": "ASR",
              "title": "语音转写",
              "value": "完成",
              "description": "文本：我想给孩子存教育金",
              "tone": "primary"
            },
            {
              "badge": "NLU",
              "title": "意图识别",
              "value": "教育金规划",
              "description": "置信度 0.98",
              "tone": "success"
            },
            {
              "badge": "推荐流程",
              "title": "教育金规划",
              "value": "预计 8 分钟",
              "description": "目标澄清 → 画像 → 方案",
              "tone": "info"
            }
          ],
          "keyFacts": [
            {
              "label": "输入源",
              "value": "语音",
              "status": "done"
            },
            {
              "label": "识别状态",
              "value": "进行中",
              "status": "doing"
            }
          ]
        },
        "chat": {
          "badge": "语音输入",
          "messages": [
            {
              "role": "user",
              "content": "我想给孩子存教育金。"
            },
            {
              "role": "assistant",
              "mode": "thinking",
              "content": "解析语音 → 匹配教育金规划工作流。"
            },
            {
              "role": "assistant",
              "content": "教育金规划工作台已开启，预计 8 分钟完成。"
            }
          ]
        }
      },
      {
        "id": "agent-question",
        "time": "T=6s",
        "title": "问题卡 #1",
        "mode": "active",
        "duration": 4200,
        "persona": {
          "badge": "规划问答",
          "speech": "为了定制方案，请先回答几个小问题。",
          "notes": [
            "目标澄清流程启动"
          ]
        },
        "workspace": {
          "badge": "画像采集",
          "headline": "问题卡 #1",
          "description": "主题：家庭",
          "tags": [
            "苏格拉底式提问"
          ],
          "cards": [
            {
              "badge": "问题",
              "title": "孩子年龄",
              "value": "滑块 0-18 岁",
              "description": "默认值 3 岁，可快速调整",
              "tone": "primary"
            },
            {
              "badge": "进度",
              "title": "步骤 1 / 10",
              "value": "澄清阶段",
              "description": "了解家庭 → 收入 → 资产 → 目标",
              "tone": "neutral"
            },
            {
              "badge": "下一步",
              "title": "收入情况",
              "value": "待回答",
              "description": "影响方案投入与成功率",
              "tone": "info"
            }
          ],
          "keyFacts": [
            {
              "label": "问题",
              "value": "孩子年龄",
              "status": "doing"
            },
            {
              "label": "控件",
              "value": "滑块 0-18",
              "status": "done"
            }
          ]
        },
        "chat": {
          "badge": "问答",
          "messages": [
            {
              "role": "assistant",
              "content": "先确认孩子现在的年龄，方便估算投资窗口。"
            }
          ],
          "quickReplies": [
            {
              "label": "3 岁",
              "setContext": {
                "childAgeLabel": "3 岁",
                "investmentWindow": "15 年",
                "monthlyInvest": "2800",
                "expectedReturn": "6-9% / 年",
                "successRate": "89%",
                "maxDrawdown": "-15%"
              }
            },
            {
              "label": "5 岁",
              "setContext": {
                "childAgeLabel": "5 岁",
                "investmentWindow": "13 年",
                "monthlyInvest": "3200",
                "expectedReturn": "6-8% / 年",
                "successRate": "86%",
                "maxDrawdown": "-17%"
              }
            },
            {
              "label": "还没出生",
              "setContext": {
                "childAgeLabel": "还没出生",
                "investmentWindow": "18 年",
                "monthlyInvest": "2200",
                "expectedReturn": "5-7% / 年",
                "successRate": "92%",
                "maxDrawdown": "-12%"
              }
            },
            {
              "label": "不方便透露",
              "setContext": {
                "childAgeLabel": "保密",
                "investmentWindow": "16 年",
                "monthlyInvest": "2500",
                "expectedReturn": "5-8% / 年",
                "successRate": "88%",
                "maxDrawdown": "-14%"
              }
            }
          ]
        }
      },
      {
        "id": "agent-answer",
        "time": "T=10s",
        "title": "画像更新",
        "mode": "active",
        "duration": 5200,
        "persona": {
          "badge": "数据刷新",
          "speech": "好的，记录完成，继续下一项。",
          "notes": [
            "画像实时更新"
          ]
        },
        "workspace": {
          "badge": "实时画像",
          "headline": "画像快照",
          "tags": [
            "实时同步"
          ],
          "cards": [
            {
              "badge": "画像参数",
              "title": "子女年龄",
              "value": "{{childAgeLabel}}",
              "description": "影响投资窗口与风险偏好",
              "tone": "success"
            },
            {
              "badge": "投资窗口",
              "title": "剩余时间",
              "value": "{{investmentWindow}}",
              "description": "匹配投入节奏与方案期限",
              "tone": "info"
            },
            {
              "badge": "进度",
              "title": "步骤 3 / 10",
              "value": "进行中",
              "description": "即将确认收入与资产",
              "tone": "neutral"
            }
          ],
          "keyFacts": [
            {
              "label": "子女年龄",
              "value": "{{childAgeLabel}}",
              "status": "done"
            },
            {
              "label": "投资窗口",
              "value": "{{investmentWindow}}",
              "status": "done"
            }
          ],
          "bulletPoints": [
            "预计投入：￥{{monthlyInvest}} / 月",
            "回答后进入收入问题"
          ]
        },
        "chat": {
          "badge": "问答",
          "messages": [
            {
              "role": "user",
              "content": "{{childAgeLabel}}"
            },
            {
              "role": "assistant",
              "mode": "thinking",
              "content": "更新画像参数 → 重新估算目标年限。"
            },
            {
              "role": "assistant",
              "content": "已记录，接下来想了解您的家庭收入情况。"
            }
          ]
        }
      },
      {
        "id": "agent-collab",
        "time": "T=45s",
        "title": "协同建模",
        "mode": "active",
        "duration": 3600,
        "persona": {
          "badge": "协同中",
          "speech": "我正在协调后台团队生成方案，请稍候。",
          "notes": [
            "多 Agent 协同运行"
          ]
        },
        "workspace": {
          "badge": "协同进程",
          "headline": "Agent 工作序列",
          "tags": [
            "实时日志",
            "多角色协作"
          ],
          "cards": [
            {
              "badge": "调度官",
              "title": "任务分解",
              "value": "5 条子任务",
              "description": "目标澄清 → 产品筛选 → 模拟",
              "tone": "primary"
            },
            {
              "badge": "进度",
              "title": "任务 3 / 5",
              "value": "运算中",
              "description": "蒙特卡洛模拟进行到 62%",
              "tone": "neutral"
            },
            {
              "badge": "耗时",
              "title": "28 秒",
              "value": "预计 +12 秒",
              "description": "生成方案报告",
              "tone": "info"
            }
          ],
          "keyFacts": [
            {
              "label": "耗时",
              "value": "28 秒",
              "status": "doing"
            },
            {
              "label": "参与 Agent",
              "value": "5",
              "status": "done"
            }
          ],
          "log": [
            {
              "agent": "数据分析师",
              "details": [
                "画像更新完成",
                "风险偏好：稳健"
              ],
              "status": "done"
            },
            {
              "agent": "投资策略师",
              "details": [
                "目标收益 {{expectedReturn}}",
                "资产配比 60/35/5"
              ],
              "status": "done"
            },
            {
              "agent": "产品顾问",
              "details": [
                "筛选产品 872 → 156",
                "月投入 {{monthlyInvest}} 元",
                "蒙特卡洛模拟运行中"
              ],
              "status": "doing"
            }
          ]
        },
        "chat": {
          "badge": "协同日志",
          "messages": [
            {
              "role": "assistant",
              "mode": "thinking",
              "content": "开始整合产品组合，请稍候。"
            },
            {
              "role": "system",
              "mode": "insight",
              "content": "⚙️ Agent 团队协作中，5 位专业角色并行工作。"
            },
            {
              "role": "assistant",
              "content": "方案计算中，大约 30 秒完成。"
            }
          ]
        }
      },
      {
        "id": "agent-plan",
        "time": "T=90s",
        "title": "方案输出",
        "mode": "active",
        "duration": 5200,
        "persona": {
          "badge": "方案解读",
          "speech": "方案生成完成，请查看推荐组合。",
          "notes": [
            "可继续追问或生成办理步骤"
          ]
        },
        "workspace": {
          "badge": "方案集",
          "headline": "推荐方案 · 稳健型",
          "tags": [
            "蒙特卡洛模拟",
            "风险审查通过"
          ],
          "cards": [
            {
              "badge": "收益",
              "title": "预期收益",
              "value": "{{expectedReturn}}",
              "description": "置信区间 75%",
              "tone": "success"
            },
            {
              "badge": "成功率",
              "title": "目标达成",
              "value": "{{successRate}}",
              "description": "教育金 50 万目标",
              "tone": "primary"
            },
            {
              "badge": "风险",
              "title": "最大回撤",
              "value": "{{maxDrawdown}}",
              "description": "压力测试通过",
              "tone": "warning"
            }
          ],
          "bulletPoints": [
            "资产配比 60/35/5",
            "月投入 {{monthlyInvest}} 元",
            "蒙特卡洛 10,000 次"
          ]
        },
        "chat": {
          "badge": "方案回复",
          "messages": [
            {
              "role": "assistant",
              "content": "推荐稳健型方案，月投入 {{monthlyInvest}} 元，可一键生成办理步骤或查看其他组合。"
            }
          ],
          "quickReplies": [
            "生成办理步骤",
            "对比其他方案",
            "换成更保守"
          ]
        }
      }
    ]
  },
  {
    "id": "assist",
    "buttonLabel": "待机态 → 业务辅助模式",
    "context": {
      "riskScore": "65",
      "riskLevel": "R3",
      "riskLabel": "稳健型",
      "nextStep": "信息确认"
    },
    "steps": [
      {
        "id": "assist-standby",
        "time": "T=0s",
        "title": "待机画布",
        "mode": "standby",
        "duration": 2400,
        "persona": {
          "badge": "欢迎模式",
          "speech": "您好，请告诉我需要办理的业务。",
          "notes": [
            "账户管理入口高亮"
          ]
        },
        "workspace": {
          "badge": "待机画布",
          "headline": "账户管理卡片",
          "description": "快捷业务综览",
          "tags": [
            "刷证提示",
            "隐私保护"
          ],
          "cards": [
            {
              "badge": "快捷入口",
              "title": "账户管理",
              "value": "4 项子业务",
              "description": "开卡 / 挂失 / 密码管理 / 升级",
              "tone": "primary"
            },
            {
              "badge": "所需材料",
              "title": "身份证",
              "value": "必带",
              "description": "刷卡或手输均可",
              "tone": "neutral"
            },
            {
              "badge": "等待时间",
              "title": "无排队",
              "value": "建议自助",
              "description": "AI 全程陪伴",
              "tone": "info"
            }
          ],
          "keyFacts": [
            {
              "label": "子业务",
              "value": "4",
              "status": "done"
            },
            {
              "label": "所需证件",
              "value": "身份证",
              "status": "done"
            }
          ]
        },
        "chat": {
          "badge": "欢迎对话",
          "messages": [
            {
              "role": "user",
              "content": "我要办账户管理。"
            },
            {
              "role": "assistant",
              "content": "好的，我来陪您完成办理。"
            }
          ],
          "quickReplies": [
            "开卡",
            "补卡",
            "提升限额"
          ]
        }
      },
      {
        "id": "assist-switch",
        "time": "T=1s",
        "title": "流程启动",
        "mode": "active",
        "duration": 3200,
        "persona": {
          "badge": "流程加载",
          "speech": "正在切换到账户管理系统，请先进行身份核验。",
          "notes": [
            "模式切换 business_assist"
          ]
        },
        "workspace": {
          "badge": "身份核验",
          "headline": "步骤 1 / 5",
          "description": "表单与硬件同步",
          "tags": [
            "刷证动画",
            "隐私遮挡"
          ],
          "cards": [
            {
              "badge": "操作",
              "title": "刷身份证",
              "value": "进行中",
              "description": "将证件放置右侧读卡器",
              "tone": "primary"
            },
            {
              "badge": "安全",
              "title": "信息脱敏",
              "value": "完成",
              "description": "屏幕自动模糊敏感字段",
              "tone": "success"
            },
            {
              "badge": "耗时",
              "title": "约 30 秒",
              "value": "剩余 18 秒",
              "description": "全程引导",
              "tone": "info"
            }
          ],
          "keyFacts": [
            {
              "label": "验证方式",
              "value": "刷身份证",
              "status": "doing"
            },
            {
              "label": "耗时",
              "value": "≈30 秒",
              "status": "pending"
            }
          ]
        },
        "chat": {
          "badge": "流程提示",
          "messages": [
            {
              "role": "assistant",
              "mode": "thinking",
              "content": "调起身份核验界面，应用隐私遮罩。"
            },
            {
              "role": "assistant",
              "content": "请将身份证放在右侧读卡器上，完成后自动跳转下一步。"
            }
          ],
          "quickReplies": [
            "读卡器在哪里？",
            "需要人工帮助"
          ]
        }
      },
      {
        "id": "assist-verify",
        "time": "T=12s",
        "title": "核验完成",
        "mode": "active",
        "duration": 3600,
        "persona": {
          "badge": "风险提示",
          "speech": "验证成功，我们继续完成监管要求的风险测评。",
          "notes": [
            "记录核验结果"
          ]
        },
        "workspace": {
          "badge": "风险测评",
          "headline": "步骤 2 / 5",
          "description": "问卷已打开",
          "tags": [
            "监管要求"
          ],
          "cards": [
            {
              "badge": "题目 1",
              "title": "年龄区间",
              "value": "4 个选项",
              "description": "真实作答即可继续",
              "tone": "primary"
            },
            {
              "badge": "进度",
              "title": "10 题",
              "value": "约 2 分钟",
              "description": "实时显示剩余题目",
              "tone": "neutral"
            },
            {
              "badge": "合规",
              "title": "适当性校验",
              "value": "开启",
              "description": "完成后才能推荐产品",
              "tone": "info"
            }
          ],
          "keyFacts": [
            {
              "label": "题目",
              "value": "1 / 10",
              "status": "doing"
            },
            {
              "label": "主题",
              "value": "年龄区间",
              "status": "done"
            }
          ]
        },
        "chat": {
          "badge": "问卷提示",
          "messages": [
            {
              "role": "user",
              "content": "证件刷好了。"
            },
            {
              "role": "assistant",
              "content": "好的，接下来请回答 10 道风险测评题，没有对错之分."
            }
          ],
          "quickReplies": [
            "为什么要做？",
            "可以跳过吗"
          ]
        }
      },
      {
        "id": "assist-help",
        "time": "T=40s",
        "title": "主动辅助",
        "mode": "active",
        "duration": 3600,
        "persona": {
          "badge": "实时辅助",
          "speech": "我注意到您停留了一会儿，给您一个小提示。",
          "notes": [
            "流动性解释弹出"
          ]
        },
        "workspace": {
          "badge": "提示条",
          "headline": "辅助说明",
          "tags": [
            "AI 弹窗"
          ],
          "cards": [
            {
              "badge": "解释",
              "title": "流动性需求",
              "value": "多久用钱",
              "description": "1 年内 → 高，3-5 年 → 中，10 年+ → 低",
              "tone": "info"
            },
            {
              "badge": "选择",
              "title": "按钮",
              "value": "我明白了 / 详细说明",
              "description": "点击即可继续答题",
              "tone": "neutral"
            },
            {
              "badge": "触发",
              "title": "停留 30 秒",
              "value": "自动检测",
              "description": "减少人工介入",
              "tone": "primary"
            }
          ],
          "keyFacts": [
            {
              "label": "触发",
              "value": "停留 30 秒",
              "status": "doing"
            },
            {
              "label": "状态",
              "value": "高亮提醒",
              "status": "doing"
            }
          ]
        },
        "chat": {
          "badge": "解释",
          "messages": [
            {
              "role": "system",
              "mode": "insight",
              "content": "监测到客户在“流动性需求”题停留超过 30 秒，AI 已介入解释。"
            },
            {
              "role": "assistant",
              "content": "流动性需求指多久后可能需要用到这笔钱：1 年内用 → 选高，3-5 年 → 选中，10 年以上 → 选低。"
            }
          ],
          "quickReplies": [
            "我明白了",
            "再举个例子"
          ]
        }
      },
      {
        "id": "assist-finish",
        "time": "T=120s",
        "title": "测评结果",
        "mode": "active",
        "duration": 4800,
        "persona": {
          "badge": "结果反馈",
          "speech": "风险测评完成，结果已生成，稍后继续信息确认。",
          "notes": [
            "仪表盘展示完成"
          ]
        },
        "workspace": {
          "badge": "测评结果",
          "headline": "{{riskLabel}} · {{riskLevel}}",
          "tags": [
            "报告生成"
          ],
          "cards": [
            {
              "badge": "得分",
              "title": "{{riskScore}} 分",
              "value": "{{riskLabel}}",
              "description": "建议中等风险产品",
              "tone": "success"
            },
            {
              "badge": "证书",
              "title": "风险等级凭证",
              "value": "可下载",
              "description": "同步柜面与客户",
              "tone": "info"
            },
            {
              "badge": "下一步",
              "title": "{{nextStep}}",
              "value": "待开始",
              "description": "进入步骤 3 / 5",
              "tone": "neutral"
            }
          ],
          "bulletPoints": [
            "可下载风险测评报告",
            "短信回执待发送"
          ],
          "keyFacts": [
            {
              "label": "得分",
              "value": "{{riskScore}}",
              "status": "done"
            },
            {
              "label": "等级",
              "value": "{{riskLevel}}",
              "status": "done"
            }
          ]
        },
        "chat": {
          "badge": "总结",
          "messages": [
            {
              "role": "assistant",
              "content": "测评完成，您的风险等级是 {{riskLevel}}（{{riskLabel}}），结果已准备好。"
            }
          ],
          "quickReplies": [
            "下载报告",
            "继续办理",
            "联系人工"
          ]
        }
      }
    ]
  },
  // 添加增强版场景
  ...enhancedScenarios
] as const;
