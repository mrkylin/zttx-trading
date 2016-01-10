var Validate={dateFormat:"yyyy-mm-dd",montFormat:"yyyy-mm",timeFormat:"yyyy-mm-dd hh:mm",secdFormat:"yyyy-mm-dd hh:mm:ss",isNull:function(a){var b=!0;return""!=this.trim(a)&&(b=!1),b},lTrim:function(a){var b="";return null!=a&&(b=a.replace(/^\s*/,"")),b},rTrim:function(a){var b="";return null!=a&&(b=a.replace(/\s*$/,"")),b},aTrim:function(a){var b="";if(null!=a){var c=a.split(/\s/);for(i=0;i<c.length;i++)b+=c[i]}return b},trim:function(a){var b="";return null!=a&&(b=a.replace(/(^\s*)|(\s*$)/g,"")),b},length:function(a){var b=0;if(!this.isNull(a))for(var c=0;c<a.length;c++)b+=$V.isChinese(a.charAt(c))?2:1;return b},isChinese:function(a){for(var b=!1,c=0;c<a.length;c++)if(a.charCodeAt(c)>=256){b=!0;break}return b},isDate:function(a){var b=!1,c=this.trim(a).match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);if(null!=c){var d=new Date(c[1],c[3]-1,c[4]);b=d.getFullYear()==c[1]&&d.getMonth()+1==parseInt(c[3],10)&&d.getDate()==c[4]}return b},quanToBan:function(a){for(var b="",c=0;c<a.length;c++)b+=a.charCodeAt(c)>65248&&a.charCodeAt(c)<65375?String.fromCharCode(a.charCodeAt(c)-65248):String.fromCharCode(a.charCodeAt(c));return b},banToQuan:function(a){for(var b="",c=0;c<a.length;c++)32==a.charCodeAt(c)&&(b+=String.fromCharCode(12288)),a.charCodeAt(c)<127&&(b+=String.fromCharCode(a.charCodeAt(c)+65248));return b},isRange:function(a,b,c){var d=!0,e=this.isNull(a);return b&&(d=!e),e||0!=c&&(a=this.trim(a),d=this.length(a)<=c),d},validate:function(a,b,c,d){var e=this.isRange(a,b,c);if(e&&!this.isNull(a)){a=this.trim(a),a=this.quanToBan(a);var f=new RegExp(d);if(-1==a.indexOf(";"))-1==a.search(f)&&(e=!1);else for(var g=a.split(";"),h=0;h<g.length;h++){var i=g[h];if(-1==i.search(f)){e=!1;break}}}return e},isValidPhone:function(a,b,c){var d="^([0-9]{3,4}-{1}[0-9]{7,8}(-[0-9]{2,6})?)?$";return this.validate(a,b,c,d)},isValidMail:function(a,b,c){var d="^(([0-9a-zA-Z]+)|([0-9a-zA-Z]+[_.0-9a-zA-Z-]*[_.0-9a-zA-Z]+))@([a-zA-Z0-9-]+[.])+(.+)$";return this.validate(a,b,c,d)},isValidMobile:function(a,b,c){var d="^(1[0-9]{10})?$";return this.validate(a,b,c,d)},isValidIcc:function(a,b,c){var d="^([0-9A-Za-z]{21})?$";return this.validate(a,b,c,d)},isValidImsi:function(a,b,c){var d="^([0-9]{15})?$";return this.validate(a,b,c,d)},isValidZipCode:function(a,b,c){var d="^([1-9][0-9]{5})?$";return this.validate(a,b,c,d)},isValidID:function(a,b,c){var d="^([1-9][0-9]{14}|[1-9][0-9]{17}|[1-9][0-9]{16}[0-9A-Za-z]{1})?$";return this.validate(a,b,c,d)},isValidIP:function(a,b,c){var d="^(((2[0-4]\\d|25[0-5]|[01]?\\d\\d?)\\.){3}(2[0-4]\\d|25[0-5]|[01]?\\d\\d?))?$";return this.validate(a,b,c,d)},isValidURL:function(a,b,c){var d="^(http|https|ftp)://([\\w-]+\\.)+[\\w-]+(/[\\w- ./?%&=]*)?$";return this.validate(a,b,c,d)},isValidFile:function(a,b,c){var d=!0;if(c&&(d=!this.isNull(a)),d&&(a=this.trim(a),1==d&&""!=b)){var e=new RegExp(".("+b.replace(/,/gi,"|")+")$","i");e.test(a)||(d=!1)}return d},isMatch:function(a,b,c){var d=!0,e=this.isNull(a);if(b&&(d=!e),!e&&""!=this.trim(c)){var f=new RegExp(c);-1==a.search(f)&&(d=!1)}return d},isValidDate:function(a,b,c){var d=!0,e=this.isNull(a);if(c&&(d=!e),!e&&(a=this.trim(a),b==this.montFormat&&(a+="-1"),d=this.isDate(a),1==d&&b==this.dateFormat)){var f="^([0-9]{4}-[0-9]{1,2}-[0-9]{1,2})?$",g=new RegExp(f);-1==a.search(g)&&(d=!1)}return d},isTime:function(a){var b=!1,c=this.trim(a).match("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2}) ([0-9]{2})[:]{1}([0-9]{2})[:]{1}([0-9]{2})?$");if(null!=c){var d=new Date(c[1],c[2]-1,c[3],c[4],c[5],c[6]);b=d.getFullYear()==c[1]&&d.getMonth()+1==parseInt(c[2],10)&&d.getDate()==c[3]&&d.getHours()==parseInt(c[4],10)&&d.getMinutes()==parseInt(c[5],10)&&d.getSeconds()==parseInt(c[6],10)}return b},isValidSecTime:function(a,b,c){var d=!0,e=this.isNull(a);if(c&&(d=!e),!e&&(a=this.trim(a),d=this.isTime(a),1==d&&b==this.secdFormat)){var f="^([0-9]{4}-[0-9]{1,2}-[0-9]{1,2}) ([0-9]{2}[:]{1}[0-9]{2}[:]{1}[0-9]{2})?$",g=new RegExp(f);-1==a.search(g)&&(d=!1)}return d},isDates:function(a){var b=!1,c=this.trim(a).match("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2}) ([0-9]{2})[:]{1}([0-9]{2})?$");if(null!=c){var d=new Date(c[1],c[2]-1,c[3],c[4],c[5]);b=d.getFullYear()==c[1]&&d.getMonth()+1==parseInt(c[2],10)&&d.getDate()==c[3]&&d.getHours()==parseInt(c[4],10)&&d.getMinutes()==parseInt(c[5],10)}return b},isValidDates:function(a,b,c){var d=!0,e=this.isNull(a);if(c&&(d=!e),!e&&(a=this.trim(a),d=this.isDates(a),1==d&&b==this.timeFormat)){var f="^([0-9]{4}-[0-9]{1,2}-[0-9]{1,2}) ([0-9]{2}[:]{1}[0-9]{2})?$",g=new RegExp(f);-1==a.search(g)&&(d=!1)}return d},isIntRange:function(a,b,c,d){var e=!0,f=this.isNull(a);return d&&(e=!f),f||(e=!isNaN(a),1==e&&(a=this.trim(a),iNum=parseInt(a),(iNum>c||iNum<b)&&(e=!1))),e},isValidCode:function(a,b,c){var d=!0,e=this.isNull(a);if(b&&(d=!e),!e){a=this.trim(a);var f="^[a-zA-Z0-9_]{"+c+"}$",g=new RegExp(f);-1==a.search(g)&&(d=!1)}return d},isValidAccount:function(a,b,c,d){var e=!0,f=this.isNull(a);if(b&&(e=!f),!f){a=this.trim(a);var g="^([0-9A-Za-z_.@-]{"+c+","+d+"})?$",h=new RegExp(g);-1==a.search(h)&&(e=!1)}return e},isInRange:function(a,b,c,d){var e=!0,f=this.isNull(a);if(b&&(e=!f),!f&&0!=c&&0!=d){a=this.trim(a);var g=this.length(a);e=g>=c&&d>=g}return e}};window.Validate=window.$V=Validate;