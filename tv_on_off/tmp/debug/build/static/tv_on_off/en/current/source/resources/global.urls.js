//Production
//CloudUrl = "http://ec2-184-72-30-126.us-west-1.compute.amazonaws.com:8080";
//Development using proxies
CloudUrl = "";

TvOnOff.tvServiceUrl = CloudUrl + "/tvs";; if ((typeof SC !== 'undefined') && SC && SC.scriptDidLoad) SC.scriptDidLoad('tv_on_off');