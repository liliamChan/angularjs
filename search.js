var module = angular.module("myApp", []);

var allFunds = "Consumer Discretionary Select Sector SPDR Fund (XLY),Consumer Staples Select Sector SPDR Fund (XLP),Energy Select Sector SPDR Fund (XLE),Financial Select Sector SPDR Fund (XLF),Health Care Select Sector SPDR Fund (XLV),Industrial Select Sector SPDR Fund (XLI),Materials Select Sector SPDR Fund (XLB),SPDR Russell 1000 ETF (ONEK),SPDR Russell 1000 Low Volatility ETF (LGLV),SPDR Russell 2000 ETF (TWOK),SPDR Russell 2000 Low Volatility ETF (SMLV),SPDR Russell 3000 ETF (THRK),SPDR Russell Small Cap Completeness ETF (RSCO),SPDR Barclays 0-5 Year TIPS ETF (SIPE),SPDR Barclays 1-10 Year TIPS ETF (TIPX),SPDR Barclays 1-3 Month T-Bill ETF (BIL),SPDR Barclays Aggregate Bond ETF (LAG),SPDR Barclays Convertible Securities ETF (CWB),SPDR Barclays Emerging Markets Local Bond ETF (EBND),SPDR Barclays High Yield Bond ETF (JNK),SPDR Barclays Intermediate Term Corporate Bond ETF (ITR),SPDR Barclays Intermediate Term Treasury ETF (ITE),SPDR Barclays International Corporate Bond ETF (IBND),SPDR Barclays International High Yield Bond ETF (IJNK),SPDR Barclays International Treasury Bond ETF (BWX),SPDR Barclays Investment Grade Floating Rate ETF (FLRN),SPDR Barclays Issuer Scored Corporate Bond ETF (CBND),SPDR Barclays Long Term Corporate Bond ETF (LWC),SPDR Barclays Long Term Treasury ETF (TLO),SPDR Barclays Mortgage Backed Bond ETF (MBG),SPDR Barclays Short Term Corporate Bond ETF (SCPB),SPDR Barclays Short Term High Yield Bond ETF (SJNK),SPDR Barclays Short Term International Treasury Bond ETF (BWZ),SPDR Barclays Short Term Treasury ETF (SST),SPDR Barclays TIPS ETF (IPE),SPDR Blackstone / GSO Senior Loan ETF (SRLN),SPDR BofA Merrill Lynch Crossover Corporate Bond ETF (XOVR),SPDR BofA Merrill Lynch Emerging Markets Corporate Bond ETF (EMCD),SPDR DB International Government Inflation-Protected Bond ETF (WIP),SPDR Dow Jones Global Real Estate ETF (RWO),SPDR Dow Jones Industrial Average ETF (DIA),SPDR Dow Jones International Real Estate ETF (RWX),SPDR Dow Jones REIT ETF (RWR),SPDR EURO STOXX 50 ETF (FEZ),SPDR EURO STOXX Small Cap ETF (SMEZ),SPDR Global Dow ETF (DGT),SPDR Gold Shares (GLD),SPDR MFS Systematic Core Equity ETF (SYE),SPDR MFS Systematic Growth Equity ETF (SYG),SPDR MFS Systematic Value Equity ETF (SYV),SPDR MSCI ACWI IMI ETF (ACIM),SPDR MSCI ACWI Low Carbon Target ETF (LOWC),SPDR MSCI ACWI ex-US ETF (CWI),SPDR MSCI Australia Quality Mix ETF (QAUS),SPDR MSCI Canada Quality Mix ETF (QCAN),SPDR MSCI EAFE Quality Mix ETF (QEFA),SPDR MSCI EM 50 ETF (EMFT),SPDR MSCI EM Beyond BRIC ETF (EMBB),SPDR MSCI Emerging Markets Quality Mix ETF (QEMM),SPDR MSCI Germany Quality Mix ETF (QDEU),SPDR MSCI Japan Quality Mix ETF (QJPN),SPDR MSCI Mexico Quality Mix ETF (QMEX),SPDR MSCI South Korea Quality Mix ETF (QKOR),SPDR MSCI Spain Quality Mix ETF (QESP),SPDR MSCI Taiwan Quality Mix ETF (QTWN),SPDR MSCI United Kingdom Quality Mix ETF (QGBR),SPDR MSCI World Quality Mix ETF (QWLD),SPDR Morgan Stanley Technology ETF (MTK),SPDR Nuveen Barclays Build America Bond ETF (BABS),SPDR Nuveen Barclays California Municipal Bond ETF (CXA),SPDR Nuveen Barclays Municipal Bond ETF (TFI),SPDR Nuveen Barclays New York Municipal Bond ETF (INY),SPDR Nuveen Barclays Short Term Municipal Bond ETF (SHM),SPDR Nuveen S&#38;P High Yield Municipal Bond ETF (HYMB),SPDR Nuveen S&#38;P VRDO Municipal Bond ETF (VRD),SPDR Russell/Nomura PRIME Japan ETF (JPP),SPDR Russell/Nomura Small Cap Japan ETF (JSC),SPDR S&#38;P 500 ETF (SPY),SPDR S&#38;P Emerging Markets Dividend ETF (EDIV),SPDR S&#38;P MIDCAP 400 ETF (MDY),SPDR S&#38;P 1500 Momentum Tilt ETF (MMTM),SPDR S&#38;P 1500 Value Tilt ETF (VLU),SPDR S&#38;P 400 Mid Cap Growth ETF (MDYG),SPDR S&#38;P 400 Mid Cap Value ETF (MDYV),SPDR S&#38;P 500 Growth ETF (SPYG),SPDR S&#38;P 500 Value ETF (SPYV),SPDR S&#38;P 600 Small Cap ETF (SLY),SPDR S&#38;P 600 Small Cap Growth ETF (SLYG),SPDR S&#38;P 600 Small Cap Value ETF (SLYV),SPDR S&#38;P Aerospace &#38; Defense ETF (XAR),SPDR S&#38;P BRIC 40 ETF (BIK),SPDR S&#38;P Bank ETF (KBE),SPDR S&#38;P Biotech ETF (XBI),SPDR S&#38;P Capital Markets ETF (KCE),SPDR S&#38;P China ETF (GXC),SPDR S&#38;P Dividend ETF (SDY),SPDR S&#38;P Emerging Asia Pacific ETF (GMF),SPDR S&#38;P Emerging Europe ETF (GUR),SPDR S&#38;P Emerging Latin America ETF (GML),SPDR S&#38;P Emerging Markets ETF (GMM),SPDR S&#38;P Emerging Markets Small Cap ETF (EWX),SPDR S&#38;P Emerging Middle East &#38; Africa ETF (GAF),SPDR S&#38;P Global Dividend ETF (WDIV),SPDR S&#38;P Global Infrastructure ETF (GII),SPDR S&#38;P Global Natural Resources ETF (GNR),SPDR S&#38;P Health Care Equipment ETF (XHE),SPDR S&#38;P Health Care Services ETF (XHS),SPDR S&#38;P Homebuilders ETF (XHB),SPDR S&#38;P Insurance ETF (KIE),SPDR S&#38;P International Consumer Discretionary Sector ETF (IPD),SPDR S&#38;P International Consumer Staples Sector ETF (IPS),SPDR S&#38;P International Dividend ETF (DWX),SPDR S&#38;P International Energy Sector ETF (IPW),SPDR S&#38;P International Financial Sector ETF (IPF),SPDR S&#38;P International Health Care Sector ETF (IRY),SPDR S&#38;P International Industrial Sector ETF (IPN),SPDR S&#38;P International Materials Sector ETF (IRV),SPDR S&#38;P International Mid Cap ETF (MDD),SPDR S&#38;P International Small Cap ETF (GWX),SPDR S&#38;P International Technology Sector ETF (IPK),SPDR S&#38;P International Telecommunications Sector ETF (IST),SPDR S&#38;P International Utilities Sector ETF (IPU),SPDR S&#38;P Metals and Mining ETF (XME),SPDR S&#38;P Mortgage Finance ETF (KME),SPDR S&#38;P Oil &#38; Gas Equipment &#38; Services ETF (XES),SPDR S&#38;P Oil &#38; Gas Exploration &#38; Production ETF (XOP),SPDR S&#38;P Pharmaceuticals ETF (XPH),SPDR S&#38;P Regional Banking ETF (KRE),SPDR S&#38;P Retail ETF (XRT),SPDR S&#38;P Russia ETF (RBL),SPDR S&#38;P Semiconductor ETF (XSD),SPDR S&#38;P Small Cap Emerging Asia Pacific ETF (GMFS),SPDR S&#38;P Software &#38; Services ETF (XSW),SPDR S&#38;P Telecom ETF (XTL),SPDR S&#38;P Transportation ETF (XTN),SPDR S&#38;P World ex-US ETF (GWL),SPDR SSGA Global Allocation ETF (GAL),SPDR SSGA Income Allocation ETF (INKM),SPDR SSGA Multi-Asset Real Return ETF (RLY),SPDR SSGA Risk Aware ETF (RORO),SPDR SSGA Ultra Short Term Bond ETF (ULST),SPDR STOXX Europe 50 ETF (FEU),SPDR Wells Fargo Preferred Stock ETF (PSK),Technology Select Sector SPDR Fund (XLK),Utilities Select Sector SPDR Fund (XLU)";

function getData(){
	return allFunds.replace(/&#38;|&amp;/g, "&").split(",");
}

function searchCtrl($scope, $filter){
	var current = 1;
	
	$scope.typeHead = function(){
		$scope.items = getData();
		$scope.searchResults = $filter("searchFilter")($scope.items, $scope.searchTerm);
		if (!$scope.searchResults || $scope.searchResults.length === 0) {
			$scope.showResult = false;
		} else {
			$scope.showResult = true;
		}
	};
	
	$scope.handleSelection = function(item){
		$scope.targetItem = item;
		window.open("search_result.html?search="+item, "_blank");
		$scope.selected = true;
		$scope.showResult = false;
		current = 1;
	};
	
	$scope.isCurrent = function(index){
		if (index === current) {
			return true;
		} else {
			return false;
		}
	};
	
	$scope.setCurrent = function(index){
		current = index;
	};
	
	$scope.keyChanged = function(ev) {
		switch(ev.keyCode) {
			case 40:
				if ((current + 1) <= $scope.searchResults.length) {
					$scope.setCurrent(current + 1);
				}
				break;
			case 38:
				if ((current - 1) >= 1) {
					$scope.setCurrent(current - 1);
				}
				break;
			case 13:
				$scope.handleSelection($scope.searchResults[current - 1]);
				break;
		}
	};
	
	$scope.blurHandle = function(){
		$scope.showResult = false;
		$scope.items = [];
	};
	
	$scope.focusHandler = function(){
		if ($scope.searchTerm === undefined) {
			$scope.searchTerm = "";
		}
	};
}

// module.directive("scrollResults", function(){
	// return {
		// link: function(scope, elem, attrs) {
// 			
		// }
	// };
// });

module.filter("searchFilter", function(){
	return function (item, keywords){
		 if (keywords === undefined || keywords === "") {
		 		//scope.showList = false;
			 	return false;
		 }
		 var result = [];
		 for(var i = 0; i < item.length; i++){
			if (item[i].toLowerCase().indexOf(keywords.toLowerCase()) != -1) {
				result.push(item[i]);
			}
		 }
		 return result;
	}
});
