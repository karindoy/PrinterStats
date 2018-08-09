console.log("==[teste.js]=>");
var http = require('http'),
    https = require('https'),
    xpath = require('xpath'),
    dom = require('xmldom').DOMParser;



function getDataFromXpath(xml,xpathToSelect)
{
    var doc = new dom().parseFromString(xml)
    var nodes = xpath.select(xpathToSelect, doc)
    
    console.log(nodes)
}

console.log("passou da get data");


var requestsOptionsMap = 
{
    printer_M811dn_ip189 : 
	{
        host:       "192.168.0.2",
        port:       "3128",
        path:       "http://192.168.0.189/cgi-bin/dynamic/printer/config/reports/devicestatistics.html",
        headers:    
		{
            'Proxy-Authorization':  'Basic ' + new Buffer('wagner:nicolas1*').toString('base64')
        },
    
		reqCallBackFn : function(response)
		{
            console.log(response);
        }
    },
	
    dadosGov_Ubs_DatasetPage : 
	{
        xpathToCollect : 
		{
            dtaUltimaAtualizacaoDaPagina :"/html/body/div[3]/div/div[3]/div/article/div/section[3]/table/tbody/tr[3]/td/span"
        },
		
        host: "dados.gov.br",
        path: "/dataset/unidades-basicas-de-saude-ubs",
        reqCallBackFn : function(response)
		{
            let body = '';
            response.on('data', function(dta)
			{
                body += dta;
            });
			
            response.on('end', function()
			{
                getDataFromXpath(body,
                                 requestsOptionsMap.dadosGov_Ubs_DatasetPage.xpathToCollect.dtaUltimaAtualizacaoDaPagina);
            });
        }        
    }    
};
http.get(
    requestsOptionsMap.dadosGov_Ubs_DatasetPage,
    requestsOptionsMap.dadosGov_Ubs_DatasetPage.reqCallBackFn);
