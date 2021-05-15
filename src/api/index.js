import * as URL from './urls';
import instance from '@/utils/http/axios';

export const getLogin = (username, password) => {
  return instance.request({
    url: URL.BASE_URL + URL.LOGIN,
    method: 'post',
    data: {
      username,
      password,
    },
  });
};

// dashboard
export const getDashboardInfoCard = (year, month) => {
  return instance.request({
    url: URL.BASE_URL + URL.DASHBOARD_INFO_CARD,
    method: 'get',
    params: {
      year,
      month,
    },
  });
};

export const getDashboardTrend = year => {
  return instance.request({
    url: URL.BASE_URL + URL.DASHBOARD_TREND,
    method: 'get',
    params: {
      year,
    },
  });
};

export const getDashboardPie = (year, month) => {
  return instance.request({
    url: URL.BASE_URL + URL.DASHBOARD_PIE,
    method: 'get',
    params: {
      year,
      month,
    },
  });
};

// analysis
export const getProducts = product => {
  return instance.request({
    url: URL.BASE_URL + URL.PRODUCT_SEARCH,
    method: 'get',
    params: {
      product,
    },
  });
};

// analysis time
export const postTimeLine = (
  startTime,
  endTime,
  indicator,
  platform,
  timeLevel,
  product,
  shop,
) => {
  return instance.request({
    url: URL.BASE_URL + URL.TIMELINE,
    method: 'post',
    data: {
      startTime,
      endTime,
      index: indicator,
      platform,
      timeLevel,
      product,
      shop
    },
  });
};

export const postTimeTable = (
  startTime,
  endTime,
  platform,
  timeLevel,
  product,
  pageNum,
  pageSize,
  shop,
) => {
  return instance.request({
    url: URL.BASE_URL + URL.TIMETABLE,
    method: 'post',
    data: {
      startTime,
      endTime,
      pageNum,
      pageSize,
      platform,
      timeLevel,
      product,
      shop
    },
  });
};

// analysis area
export const postProvinceMap = (
  startTime,
  endTime,
  indicator,
  platform,
  product,
  shop,
) => {
  return instance.request({
    url: URL.BASE_URL + URL.PROVINCE_MAP,
    method: 'post',
    data: {
      startTime,
      endTime,
      index: indicator,
      platform,
      product,
      shop
    },
  });
};

export const postProvinceTop = (
  startTime,
  endTime,
  indicator,
  platform,
  product,
  shop,
) => {
  return instance.request({
    url: URL.BASE_URL + URL.TOP_PROVINCE,
    method: 'post',
    data: {
      startTime,
      endTime,
      index: indicator,
      platform,
      product,
      shop
    },
  });
};

export const postProvinceTable = (
  startTime,
  endTime,
  platform,
  product,
  pageNum,
  pageSize,
  shop,
) => {
  return instance.request({
    url: URL.BASE_URL + URL.PROVINCE_TABLE,
    method: 'post',
    data: {
      startTime,
      endTime,
      platform,
      product,
      pageNum,
      pageSize,
      shop
    },
  });
};

// analysis platform
export const postPlatformLine = (startTime, endTime, indicator, product) => {
  return instance.request({
    url: URL.BASE_URL + URL.PLATFORM_LINE,
    method: 'post',
    data: {
      startTime,
      endTime,
      index: indicator,
      product,
    },
  });
};

export const postPlatformTable = (
  startTime,
  endTime,
  product,
  pageNum,
  pageSize,
) => {
  return instance.request({
    url: URL.BASE_URL + URL.PLATFORM_TABLE,
    method: 'post',
    data: {
      startTime,
      endTime,
      product,
      pageNum,
      pageSize,
    },
  });
};

// analysis product
export const postProductLine = (startTime, endTime, indicator, platform, shop) => {
  return instance.request({
    url: URL.BASE_URL + URL.PRODUCT_LINE,
    method: 'post',
    data: {
      startTime,
      endTime,
      index: indicator,
      platform,
      shop
    },
  });
};

export const postProductTable = (
  startTime,
  endTime,
  platform,
  pageNum,
  pageSize,
  shop,
) => {
  return instance.request({
    url: URL.BASE_URL + URL.PRODUCT_TABLE,
    method: 'post',
    data: {
      startTime,
      endTime,
      platform,
      pageNum,
      pageSize,
      shop
    },
  });
};

export const postTopTenProductSales = (startTime, endTime, platform, shop) => {
  return instance.request({
    url: URL.BASE_URL + URL.TOP_TEN_PRODUCT_SALES,
    method: 'post',
    data: {
      startTime,
      endTime,
      platform,
      shop
    },
  });
};

export const postTopTenProductNumbers = (startTime, endTime, platform, shop) => {
  return instance.request({
    url: URL.BASE_URL + URL.TOP_TEN_PRODUCT_NUMBERS,
    method: 'post',
    data: {
      startTime,
      endTime,
      platform,
      shop
    },
  });
};

// upload
export const getUploadTable = (pageNum, pageSize) => {
  return instance.request({
    url: URL.BASE_URL + URL.UPLOAD_TABLE,
    method: 'get',
    params: {
      pageNum,
      pageSize,
    },
  });
};

export const deleteFile = id => {
  return instance.request({
    url: URL.BASE_URL + URL.DELETE_FILE,
    method: 'delete',
    params: {
      id
    }
  })
}


// group
export const createGroup = () => {
  return instance.request({
    url: URL.BASE_URL + URL.CREATE_GROUP,
    method: 'post',
    data: {},
  });
};

export const getGroupTable = (pageNum, pageSize) => {
  return instance.request({
    url: URL.BASE_URL + URL.GROUP_TABLE,
    method: 'get',
    params: {
      pageNum,
      pageSize,
    },
  });
};

// user
export const addUser = (username, password, permissionIdList) => {
  return instance.request({
    url: URL.BASE_URL + URL.ADD_USER,
    method: 'post',
    data: {
      username,
      password,
      permissionIdList,
    },
  });
};

export const getAllUser = () => {
  return instance.request({
    url: URL.BASE_URL + URL.GET_ALL_USER,
    method: 'get',
  });
};

export const deleteUser = id => {
  return instance.request({
    url: URL.BASE_URL + URL.DELETE_USER,
    method: 'delete',
    params: {
      id,
    },
  });
};

// add
export const shopSearch = shop => {
  return instance.request({
    url: URL.BASE_URL + URL.SHOP_SEARCH,
    method: 'get',
    params: {
      shop
    }
  })
}

// changePassword
export const changePassword = (username, oldPassword, newPassword) => {
  return instance.request({
    url: URL.BASE_URL + URL.CHANGE_PASSWORD,
    method: 'get',
    params: {
      username,
      oldPassword,
      newPassword
    }
  })
}