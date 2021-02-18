const getQueryParam = (land_success, launch_success, launch_year): string => {
  let queryParam = '';
  if (launch_success) {
    queryParam = queryParam.concat('&launch_success=', launch_success.toString());
  }
  if (land_success) {
    queryParam = queryParam.concat('&land_success=', land_success.toString());
  }
  if (launch_year) {
    queryParam = queryParam.concat('&launch_year=', launch_year.toString());
  }
  return queryParam;  
}

export default getQueryParam;