## analysisData time

### timeLine

请求地址：post /api/getTimeLine

请求参数：
| field | type | sample |
| ---- | ---- | ---- |
| startTime | String | "2020-06-01" |
| endTime | String | "2020-08-15" |
| index | String | "销售总金额" |
| platform | String[] | ["天猫","京东"]|
| timeLevel | String | "月度" |
| product | String[] | ["正山小种"] |

返回参数：
| field | type | sample | note |
| ---- | ---- | ---- | ---- |
| status | Number | 200 | 状态码 |
| message | String | "成功" | 状态描述 |
| data | Object | | 返回数据 |

data：
| field | type | sample | note |
| ---- | ---- | ---- | ---- |
| timeLine | Object[] | [{"date": "2020-10", "value": 100}, {"date": "2020-01", "value": 100}] | 所需数据 |

### timeTable

请求地址：post /api/getTimeTable

请求参数：
| field | type | sample |
| ---- | ---- | ---- |
| startTime | String | "2020-06-01" |
| endTime | String | "2020-08-15" |
| platform | String[] | ["天猫","京东"]|
| timeLevel | String | "月度" |
| product | String[] | ["正山小种"] |
| pageNum | Number | 1 |
| pageSize | Number | 10 |

返回参数：
| field | type | sample | note |
| ---- | ---- | ---- | ---- |
| status | Number | 200 | 状态码 |
| message | String | "成功" | 状态描述 |
| data | Object | | 返回数据 |

data：
| field | type | sample | note |
| ---- | ---- | ---- | ---- |
| list | Object | {"total": 0,"list": [], "pageNum": 1,pageSize": 10} | pageHelper返回数据 |

list:
| field | type | sample | note |
| ---- | ---- | ---- | ---- |
| list | Object[] | [{"time": "2020-06","sales": 2940,"orders": 3,"numbers": 3,"consumers": 3}] | 所需数据 |
| total | Number | 100 | 总数据量 |
| pageNum | Number | 1 | 第几页 |
| pageSize | Number | 10 | 一页多少条数据 |

