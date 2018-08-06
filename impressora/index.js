console.log("==[index.js]=>");

var http = require('http'),
    https = require('https'),
    xpath = require('xpath'),
    dom = require('xmldom').DOMParser;

/*
// *******************************************   Atributos impressora   ************************************************** //
//1
var printer_LexMark_MS811dn_ip189 = new impressora ("Lexmark", "MS811 dn","Sala dr carlos", "192.168.0.83","Andar:1 ,Sala: 1");

//------------------------//------------------------//--------------------------------//----------------//
//2
var printer_LexMark_T630_ip154 = new impressora ("Lexmark", "T630","Ed. Física", "192.168.0.154","Andar:3 ,Sala: 1");

//------------------------///----------------------//------------------------------//-------------------//
//3, local
var printer_LexMark_MS811dn_ipLocal = new impressora ("Lexmark", "MS811 dn","lugar", "local","Andar:x ,Sala: y");

//------------------------///----------------------//------------------------------//-------------------//
//4
var printer_LexMark_MS811dn_ip226 = new impressora ("Lexmark", "MS811 dn","Eletro", "192.168.0.226","Andar:1 ,Sala: y");

//------------------------///----------------------//------------------------------//-------------------//
//5
var printer_LexMark_MS811dn_ip238 = new impressora ("Lexmark", "MS811 dn","Consultório", "192.168.0.238", "Andar:2 ,Sala: 14");

//------------------------///----------------------//------------------------------//-------------------//
//6, local
var printer_LexMark_MS811dn_ipLocal = new impressora ("Lexmark", "MS811 dn","lugar", "local", "Andar:x ,Sala: y");

//------------------------///----------------------//------------------------------//-------------------//
//7, local
var printer_LexMark_MS811dn_ipLocal = new impressora ("Lexmark", "MS811 dn","lugar", "local", "Andar:x ,Sala: y");

//------------------------///----------------------//------------------------------//-------------------//
//8
var printer_LexMark_MS811dn_ip239 = new impressora ("Lexmark", "MS811 dn","Compras", "192.168.0.239", "Andar: 2,Sala: 1");

//------------------------///----------------------//------------------------------//-------------------//
//9
var printer_LexMark_MS811dn_ip235 = new impressora ("Lexmark", "MS811 dn","Consultório 07", "192.168.0.235", "Andar:1,Sala:y");

//------------------------///----------------------//------------------------------//-------------------//
//10
var printer_LexMark_MX511de_ip44 = new impressora ("Lexmark", "MX511 de","Diretoria Técnica", "192.168.0.44", "Andar:x ,Sala: y");

//------------------------///----------------------//------------------------------//-------------------//
//11
var printer_Samsung_SCX5635_ip253 = new impressora ("Samsung", "SCX 5635","lugar", "192.168.0.253", "Andar:x ,Sala: y");

//------------------------///----------------------//------------------------------//-------------------//
//12
var printer_HP_laserjet400_ip157 = new impressora ("HP", "laserjet 400","lugar", "192.168.0.157", "Andar:x ,Sala: y");

//------------------------///----------------------//------------------------------//-------------------//
//13, local
var printer_HP_laserjet1320_ipLocal = new impressora ("HP", "laserjet 1320","lugar", "local", "Andar:x ,Sala: y");

//------------------------///----------------------//------------------------------//-------------------//
//14
var printer_Phaser_3100MFP_ipLocal = new impressora ("Phaser", "3100MFP","lugar", "local", "Andar:x ,Sala: y");

//------------------------///----------------------//------------------------------//-------------------//
//15
var printer_LexMark_MS317_ip237 = new impressora ("Lexmark", "MS317","lugar", "192.168.0.237", "Andar:x ,Sala: y");

//------------------------///----------------------//------------------------------//-------------------//
//16
var printer_LexMark_MS317_ip242 = new impressora ("Lexmark", "MS317","lugar", "192.168.0.242", "Andar:x ,Sala: y");

//------------------------///----------------------//------------------------------//-------------------//
//17
var printer_LexMark_MX511_ipLocal = new impressora ("Lexmark", "MX511","lugar", "local", "Andar:x ,Sala: y");

//------------------------///----------------------//------------------------------//-------------------//
//18
var printer_LexMark_MS811dn_ip213 = new impressora ("Lexmark", "MS811 dn","lugar", "192.168.0.213", "Andar:x ,Sala: y");

//------------------------///----------------------//------------------------------//-------------------//
//19
var printer_LexMark_MS811dn_ip230 = new impressora ("Lexmark", "MS811 dn","lugar", "192.168.0.230", "Andar:x ,Sala: y");

//------------------------///----------------------//------------------------------//-------------------//
//20
var printer_LexMark_MX511_ip195 = new impressora ("Lexmark", "MX511","lugar", "192.168.0.195", "Andar:x ,Sala: y");

//------------------------///----------------------//------------------------------//-------------------//
//21, local
var printer_Epson_L355_ipLocal = new impressora ("Epson", "L355","convivencia", "local", "Andar:x ,Sala: y");

//------------------------///----------------------//------------------------------//-------------------//
//22
var printer_LexMark_CS510_ip210 = new impressora ("Lexmark", "CS510 de","lugar", "192.168.0.210", "Andar:x ,Sala: y");

//------------------------///----------------------//------------------------------//-------------------//
//23
var printer_LexMark_MS317_ip224 = new impressora ("Lexmark", "MS317","lugar", "192.168.0.224", "Andar:x ,Sala: y");

//------------------------///----------------------//------------------------------//-------------------//
//24
var printer_LexMark_MS811dn_ip229 = new impressora ("Lexmark", "MS811 dn","lugar", "192.168.0.229", "Andar:x ,Sala: y");

//------------------------///----------------------//------------------------------//-------------------//
//25
var printer_LexMark_MS811dn_ip187 = new impressora ("Lexmark", "MS811 dn","lugar", "192.168.0.187", "Andar:x ,Sala: y");
*/
//------------------------//------------------------//--------------------------------//----------------//
//26
var printer_LexMark_MS811dn_ip189 = new impressora ("Lexmark", "MS811 dn","Administracao", "192.168.0.189", "Andar:Terreo, Sala:8");
/*
//------------------------///----------------------//------------------------------//-------------------//
//27
var printer_LexMark_MS317_ip227 = new impressora ("Lexmark", "MS317","lugar", "192.168.0.227", "Andar:x ,Sala: y");

//------------------------///----------------------//------------------------------//-------------------//
//28
var printer_LexMark_MS317_ip88 = new impressora ("Lexmark", "MS317","lugar", "192.168.0.88", "Andar:x ,Sala: y");

//------------------------///----------------------//------------------------------//-------------------//
//29
var printer_LexMark_T654_ip129 = new impressora ("Lexmark", "T654 dn","lugar", "192.168.0.129", "Andar:x ,Sala: y");

//------------------------///----------------------//------------------------------//-------------------//
//NomeImpressora.toString();
*/
// ***************************************************************************************************************** //

// ************************************************* Classe impressora ********************************************* //

class impressora
{
    constructor(marca, modelo, local, ip, Andar)
    {
        this.marca=marca;
        this.modelo=modelo;
        this.local=local;
        this.ip=ip;
        this.Andar=Andar;

    }

    toString ()
    {
        console.log(this.marca+" | "+this.modelo+" | "+this.local+" | "+this.ip+" | "+this.Andar);
    }
}

	var selectImpressora = printer_Mdl_MS811dn_ip189;
	selectImpressora.toString();
// ***************************************************************************************************************** //


function getDataFromXpath(xml,xpathToSelect)
{
    var doc = new dom().parseFromString(xml)
    var nodes = xpath.select(xpathToSelect, doc)
    
    console.log(nodes);
}

var requestsOptionsMap = 
{
    printer_M811dn_ip189 : 
	{
        host:       "192.168.0.2",
        port:       "3128",
        path:       "http://"+printer_Mdl_MS811dn_ip189.ip"+/cgi-bin/dynamic/printer/config/reports/devicestatistics.html",
        headers:
	    {
                'Proxy-Authorization':  'Basic ' + new Buffer('wagner:nicolas1*').toString('base64')
        },
    
	    reqCallBackFn : function(response)
	    {
            console.log(response);
        }
    },
};
		
// ********************************************** Coleta Estatistica ********************************************************* //		
	
	//---------------- Coleta estatistica LexMark ----------------//
		/*
			#Modelos de impressoras LexMark monocromaticas#

				~"MS811 dn"
				~"MX511 dn"
				~"MS317"
				~"T654 dn"
				~"T630"
			#	
		
			#Modelos de impressoras LexMark coloridas#
		
				~"CS510 de"
			#
		*/	
	LexMark_Printer_Stats_mono:
	{
		XPathCollectLexmark:
		{
			//caminho: Contagem lados de mídia>Lados mon. reco.>total
			getTotalPaginasImpressas:"/html/body/table[5]/tbody/tr[8]/td[2]/p"
			
			//caminho: Contagem lados de mídia>Lados monocromáticos impressos
			getLados:"/html/body/table[5]/tbody/tr[20]/td[2]/p"
			
			//caminho: Info de suprimentos>Cartucho Preto
			getCartuchoPretoInstallDate::"/html/body/table[8]/tbody/tr[3]/td[2]/p"
		},
		
		host:,
		path:,
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
                                 requestsOptionsMap.LexMark_Printer_Stats_mono.XPathCollectLexmark.getTotalPaginasImpressas);
            });
        }
		
	}
	//-------------------------------------------------------------------//
	
	//------------------- Coleta estatistica Samsung -------------------//
		/*
		#Modelos de impressoras Samsung coloridas#
		
			~"SCX 5635" toner : MLT-D208
		#
		*/	
		LexMark_Printer_Stats_color:
		{
			XPathCollectLexmark:
			
			{
				
				getLadosSamsung: "/html/body/table/tbody/tr[1]/td/table[2]/tbody/tr[2]/td/table/tbody/tr/td/table/tbody/tr[2]/td[2]"
				//impresões totais (um lado + dois lados)
				
				getFolhasUsadasTotal:"/html/body/table/tbody/tr[1]/td/table[2]/tbody/tr[2]/td/table/tbody/tr/td/table/tbody/tr[6]/td[2]"
				
				getFolhasUsadasDoisLados:"/html/body/table/tbody/tr[1]/td/table[2]/tbody/tr[2]/td/table/tbody/tr/td/table/tbody/tr[11]/td[2]"
				
				getPorcentagemToner:"/html/body/table/tbody/tr[1]/td/table[2]/tbody/tr[2]/td/table/tbody/tr/td/table[2]/tbody/tr[4]/td[2]"
			}
	//-------------------------------------------------------------------//
		
	//------------------- Coleta estatistica Epson -------------------//
		/*
		#Modelos de impressoras Epson coloridas#
		
			~"L355"
		#
		*/	
	//-------------------------------------------------------------------//
	
	//------------------- Coleta estatistica HP -------------------//
		/*
		#Modelos de impressoras HP monocromaticas#
		
			~"laserjet 1320"
			
		#
		*/	
	//-------------------------------------------------------------------//
	
	//------------------- Coleta estatistica Phaser -------------------//
		/*
		#Modelos de impressoras Phaser #
		
			~"3100MFP"
		#
		*/	
	//-------------------------------------------------------------------//


// ***************************************************************************************************************** //

	


http.get(
    requestsOptionsMap.dadosGov_Ubs_DatasetPage,
    requestsOptionsMap.dadosGov_Ubs_DatasetPage.reqCallBackFn);
	
	
	
	/*
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
		*/		


/*https.get(requestsOptionsMap.dadosGov_Ubs_DatasetPage, function(response) {
    var body = '';
    response.on('data', function(data) {
        body += data;
    });
    response.on('end', function() {
        console.log(body);
        //var parsed = JSON.parse(body);
        //console.log(parsed);
        //reqCallBackFn(parsed);
        //reqCallBackFn({
        //    email: parsed.email,
        //    password: parsed.pass
        //});
    });
});
*/
