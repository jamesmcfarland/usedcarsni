const fs = require("fs");

const pagecontent = `<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=9,IE=edge" />
        <meta name="google-site-verification" content="pKaLSqy1yWGoIZt3fgGyV1w8vCd8yB0BwYRHJMhUiCk" />
        <title>BMW 3 Series Northern Ireland | UsedCarsNI.com</title>

        <!-- CMP -->
        <script type="text/javascript" src="/responsive/js/cmp.js?v=1782"></script>
        <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>

        <!-- GOOGLE OPTIMIZE -->
        <script src="https://www.googleoptimize.com/optimize.js?id=OPT-KNKWGVF"></script>

        <META name="Robots" content="index, follow">
    <META name="Distribution" content="Global">
    <META name="resource-type" content="Document">
    <META name="rating" content="General">
    <META name="revisit" content="7 days"><META name="Keywords" content="Used BMW 3 Series for sale in Northern Ireland. Second hand BMW 3 Series cars in Northern Ireland.">
    <META name="Description" content="Used BMW 3 Series for sale in Northern Ireland. Second hand BMW 3 Series cars in Northern Ireland.">
        <meta name="viewport" content="width=device-width" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />
        
        
        <meta name="y_key" content="0770b0f0e5bd8252" />
        <meta name="blitz" content="mu-c0b46354-9e2f29ce-65116123-1015b0f4">
        <meta name="facebook-domain-verification" content="790uj65lsvx074efhkegpisubwxiz4" />
        
        
        <link rel="icon" href="/favicon.ico" type="image/x-icon">
        <link rel="stylesheet" href="/responsive/styles/bootstrap.css?v=1782" />
        <link rel="stylesheet" href="/responsive/styles/bootstrap-grid.css?v=1782" />
        <link rel="stylesheet" href="/responsive/styles/bootstrap-theme.css?v=1782" />
        <link rel="stylesheet" href="/responsive/styles/common-styles.css?v=1782" />
        <link rel="stylesheet" href="/responsive/styles/search-colour.css?v=1782" />
        <link rel="stylesheet" href="/responsive/styles/sub-nav-new.css?v=1782" />
        <link rel="stylesheet" href="/responsive/styles/jquery-ui.1.11.4.css?v=1782">
        <link rel="stylesheet" href="/responsive/styles/sumoselect.css?v=1782" />
        <script type="text/javascript" src="/js/jquery/jquery.min.js?v=1782"></script>
        <script type="text/javascript" src="/responsive/js/core-js-polyfill.min.js"></script>
        
<script type="text/javascript">
    window.adHandler = window.adHandler || {};
    window.adHandler.cmd = window.adHandler.cmd || [];

    adHandler.cmd.push(function () {
        
adHandler.service.setTargeting('Make', 'BMW');

adHandler.service.setTargeting('Model', '3 Series');

adHandler.service.setTargeting('VehicleType', 'car');

adHandler.service.setTargeting('YearFrom', '1940');

adHandler.service.setTargeting('YearTo', '2022');

        adHandler.service.request();
    });

    window.googletag = window.googletag || {};
    window.googletag.cmd = window.googletag.cmd || [];

    googletag.cmd.push(function() {
        googletag.pubads().addEventListener('slotRenderEnded', function(event) {
            var id = '#' + event.slot.getSlotElementId();
            if (event.isEmpty && $(id).parent().hasClass('with-bg')) {
                $(id).parent().hide();
                $(id).parent().prev().removeClass('no-bottom-border');
            }
        });
    });
</script>

<script async type="text/javascript" src="/responsive/js/cpg_ad_xchange_search.js?v=1782"></script>

        <script type="text/javascript" src="/js/jquery/ui/jquery-ui.min.js?v=1782"></script>
        <script type="text/javascript" src="/js/jquery/ui/jquery.ui.touch-punch.min.js?v=1782"></script>
        <script type="text/javascript" src='/js/inheritance.js?v=1782'></script>
        <script type="text/javascript" src="/responsive/js/jquery.sumoselect.js?v=1782"></script>
        <script type="text/javascript" src="/responsive/js/scripts.js?v=1782"></script>
        <script type="text/javascript">
            var milliseconds = new Date().getTime();
            $(document).ready(function () {
                $.get('/ajax_request.php?request=count_statistics', {
                    t: milliseconds
                });
            });
        </script>
        <script type="text/javascript" src="/responsive/js/jquery.selector.js?v=1782"></script>
        <script type="text/javascript" src="/responsive/js/nunjucks.min.js?v=1782"></script>
        <script type="text/javascript" src="/responsive/js/DetectLocationByBrowser.js?v=1782"></script>
        <script type="text/javascript" src="/responsive/js/jquery.cookie.js?v=1782"></script>
        <script type="text/javascript" src="/responsive/js/MobileTabs.js?v=1782"></script>
        
        <script type="text/javascript" src="/responsive/js/anime.min.js?v=1782"></script>
        <script type="text/javascript" src="/responsive/js/TabIndicator.js?v=1782"></script>
        
        <script type="text/javascript" src="/responsive/js/SearchForm.js?v=1782"></script>
        <script type="text/javascript" src="/responsive/js/scrollInsteadOf.js?v=1782"></script>
        
        <script type="text/javascript" src="/responsive/js/TimeKey.js?v=1782"></script>
        
        
        
            <script type="text/javascript" src="/responsive/js/DynamicSearchForm.js?v=1782"></script>
        
        
        
        
        <script type="text/javascript" src="/responsive/js/SearchFormSwitcher.js?v=1782"></script>
        
        <script type="text/javascript" src="/responsive/js/common_funcs.js?v=1782"></script>
        <script type="text/javascript" src="/responsive/js/picturefill.min.js"></script>
        <!--[if lt IE 9]>
        <script type="text/javascript" src="/responsive/js/html5shiv.js"></script>
        <![endif]-->
        <script type="text/javascript" src="/responsive/js/modernizr-custom.js?v=1782"></script>

        

        <script type="text/javascript" src="/js/store/Mutations.js?v=1782"></script>
        <script type="text/javascript" src="/js/store/Actions.js?v=1782"></script>
        <script type="text/javascript" src="/js/store/Store.js?v=1782"></script>
        <script type="text/javascript">
            var staticVersion = '1782';
            const store = new Store({
                actions: Actions,
                mutations: Mutations
            });
            $(function () {
                var isHomePage = false;
                
                new TimeKey('1671933406', 'timehash', store);
                
                window.topSearch = new DynamicSearchForm('#search-form', {
                    selectType: 'SumoSelect',
                    isHomePage:false,
                    handledBySwitcher: false
                }, store);

                

                

                

                
            });
        </script>
        
        
        <!-- @formatter:off -->
<script type="text/javascript">
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments);};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s);}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '232287450504489');
fbq('track', 'PageView');

fbq('track', 'Search', {
    search_string: 'bmw 3 series',
    content_category: 'used cars > cars > bmw > 3 series',
    content_ids: ["311807913_MBMotors","300895568_FastLaneMotorsNI","312472179_CHCarSales","312683279_AdrianOreilly","312065966_jenniferkavanagh","296095324_PaulBlaneyMotorsLtd","308976469_CausewayCars","309107870_JJCars","312400834_Jonny","306544455_JBCARS"],
    content_type: 'product'
});

</script>
<noscript>
    <img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=232287450504489&ev=PageView&noscript=1" />
</noscript>
        <script type="text/javascript" src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" async></script>
        
        
        
        

    </head>
    <body class="page-search-results search-type-1">


<link rel="stylesheet" type="text/css" href="/responsive/styles/back-menu.css?v=1782" />
<header role="banner" class="navbar-home">
    <nav class="navbar navbar-inverse navbar-static-top">
    <div class="navbar-header">
        <div class="navbar-mobile__wrap">
            <div class="navbar-mobile__left-column hidden-md hidden-lg hidden-xl">
                <a href="#" class="navbar-mobile__menu back-menu">
                    <i class="glyphicon glyphicon-back" aria-hidden="true"></i>
                    <span>Back</span>
                </a>
                <a href="/advertise.php" class="navbar-mobile__menu hidden-xsss">
                    <i class="glyphicon glyphicon-sell" aria-hidden="true"></i>
                    <span>Sell</span>
                </a>
            </div>
            <div class="navbar-mobile__center-column ">
    <a class="navbar-brand navbar-brand__desktop" href="/">
        <img alt="Used Cars NI" src="/responsive/images/menu/logo.svg">
    </a>
</div>
            <div class="navbar-mobile__right-column hidden-md hidden-lg hidden-xl">
                <a href="/mystocklist.php" class="navbar-mobile__menu nav-link__compare  hidden-xsss">
                    <i class="glyphicon glyphicon-compare" aria-hidden="true"></i>
                    <span>Compare</span>
                </a>
                <button type="button" class="navbar-toggle collapsed navbar-mobile__menu"
                        data-toggle="collapse"
                        data-target="#menu-collapse-mobile"
                        aria-expanded="false"
                >
                    <span class="sr-only">Toggle navigation</span>
                    <i class="glyphicon glyphicon-menu" aria-hidden="true"></i>
                    <span>Menu</span>
                </button>
            </div>
        </div>
    </div>

    <!-- Navigation col-md and more -->
    <div id="menu-collapse-mobile" class="navbar-collapse collapse visible-md visible-lg visible-xl">
        <div class="pull-left">
            

<ul class="nav navbar-nav visible-xl">
    <li class="">
    <a class="navbar-link" href="https://www.usedcarsni.com/directory" title="Directory" target="_top">
        <span>Directory</span>
    </a>
</li>

<li class="">
    <a class="navbar-link" href="https://www.usedcarsni.com/reviews" title="Car Reviews" target="_top">
        <span>Car Reviews</span>
    </a>
</li>

<li class="">
    <a class="navbar-link" href="http://blog.usedcarsni.com" title="Blog" target="_blank">
        <span>Blog</span>
    </a>
</li>
</ul>

<ul class="nav navbar-nav visible-lg">
    <li class="">
    <a class="navbar-link" href="https://www.usedcarsni.com/directory" title="Directory" target="_top">
        <span>Directory</span>
    </a>
</li>

<li class="">
    <a class="navbar-link" href="https://www.usedcarsni.com/reviews" title="Car Reviews" target="_top">
        <span>Car Reviews</span>
    </a>
</li>

<li class="">
    <a class="navbar-link" href="http://blog.usedcarsni.com" title="Blog" target="_blank">
        <span>Blog</span>
    </a>
</li>
</ul>

<ul class="nav navbar-nav visible-md">
    <li class="">
    <a class="navbar-link" href="https://www.usedcarsni.com/directory" title="Directory" target="_top">
        <span>Directory</span>
    </a>
</li>

<li class="">
    <a class="navbar-link" href="https://www.usedcarsni.com/reviews" title="Car Reviews" target="_top">
        <span>Car Reviews</span>
    </a>
</li>

<li class="">
    <a class="navbar-link" href="http://blog.usedcarsni.com" title="Blog" target="_blank">
        <span>Blog</span>
    </a>
</li>
</ul>

<ul class="nav navbar-nav visible-sm">
    <li class="">
    <a class="navbar-link" href="https://www.usedcarsni.com/" title="Home" target="_top">
        <span>Home</span>
    </a>
</li>

<li class="">
    <a class="navbar-link" href="https://www.usedcarsni.com/directory" title="Directory" target="_top">
        <span>Directory</span>
    </a>
</li>

<li class="">
    <a class="navbar-link" href="https://www.usedcarsni.com/reviews" title="Car Reviews" target="_top">
        <span>Car Reviews</span>
    </a>
</li>

<li class="">
    <a class="navbar-link" href="http://blog.usedcarsni.com" title="Blog" target="_blank">
        <span>Blog</span>
    </a>
</li>

<li class="">
    <a class="navbar-link" href="https://www.usedcarsni.com/what_our_customers_say" title="TrustPilot" target="_top">
        <span>TrustPilot</span>
    </a>
</li>
</ul>

<ul class="nav navbar-nav visible-xs">
    <li class="">
    <a class="navbar-link" href="https://www.usedcarsni.com/" title="Home" target="_top">
        <span>Home</span>
    </a>
</li>

<li class="">
    <a class="navbar-link" href="https://www.usedcarsni.com/directory" title="Directory" target="_top">
        <span>Directory</span>
    </a>
</li>

<li class="">
    <a class="navbar-link" href="https://www.usedcarsni.com/reviews" title="Car Reviews" target="_top">
        <span>Car Reviews</span>
    </a>
</li>

<li class="">
    <a class="navbar-link" href="http://blog.usedcarsni.com" title="Blog" target="_blank">
        <span>Blog</span>
    </a>
</li>

<li class="">
    <a class="navbar-link" href="https://www.usedcarsni.com/what_our_customers_say" title="TrustPilot" target="_top">
        <span>TrustPilot</span>
    </a>
</li>
</ul>

<ul class="nav navbar-nav visible-xss">
    <li class="">
    <a class="navbar-link" href="https://www.usedcarsni.com/" title="Home" target="_top">
        <span>Home</span>
    </a>
</li>

<li class="">
    <a class="navbar-link" href="https://www.usedcarsni.com/directory" title="Directory" target="_top">
        <span>Directory</span>
    </a>
</li>

<li class="">
    <a class="navbar-link" href="https://www.usedcarsni.com/reviews" title="Car Reviews" target="_top">
        <span>Car Reviews</span>
    </a>
</li>

<li class="">
    <a class="navbar-link" href="http://blog.usedcarsni.com" title="Blog" target="_blank">
        <span>Blog</span>
    </a>
</li>

<li class="">
    <a class="navbar-link" href="https://www.usedcarsni.com/what_our_customers_say" title="TrustPilot" target="_top">
        <span>TrustPilot</span>
    </a>
</li>
</ul>


        </div>
        <div class="pull-right">
            

<ul class="nav navbar-nav visible-xl">
    <li class="nav-link__compare">
    <a class="navbar-link" href="https://www.usedcarsni.com/mystocklist.php" title="Compare" target="_top" onclick="stat_counter(559, '', 'https://www.usedcarsni.com/');" rel="sidebar">
        <span>Compare</span>
    </a>
</li>

<li class="">
    <a class="navbar-link" href="https://www.usedcarsni.com/get_updates?search_type=1" title="Vehicle Alerts" target="_top">
        <span>Vehicle Alerts</span>
    </a>
</li>

<li class="">
    <a class="navbar-link" href="#" title="Used Cars NI" target="_top" onclick="addBookmark('https://www.usedcarsni.com/','Used Cars NI'); stat_counter(21, '', 'https://www.usedcarsni.com/');" rel="sidebar">
        <span>Add to Bookmarks</span>
    </a>
</li>

<li class="">
    <a class="navbar-link" href="https://www.usedcarsni.com/login_page.php" title="Login" target="_top">
        <span>Login</span>
    </a>
</li>
</ul>

<ul class="nav navbar-nav visible-lg">
    <li class="nav-link__compare">
    <a class="navbar-link" href="https://www.usedcarsni.com/mystocklist.php" title="Compare" target="_top" onclick="stat_counter(559, '', 'https://www.usedcarsni.com/');" rel="sidebar">
        <span>Compare</span>
    </a>
</li>

<li class="">
    <a class="navbar-link" href="https://www.usedcarsni.com/get_updates?search_type=1" title="Vehicle Alerts" target="_top">
        <span>Vehicle Alerts</span>
    </a>
</li>

<li class="">
    <a class="navbar-link" href="#" title="Used Cars NI" target="_top" onclick="addBookmark('https://www.usedcarsni.com/','Used Cars NI'); stat_counter(21, '', 'https://www.usedcarsni.com/');" rel="sidebar">
        <span>Add to Bookmarks</span>
    </a>
</li>

<li class="">
    <a class="navbar-link" href="https://www.usedcarsni.com/login_page.php" title="Login" target="_top">
        <span>Login</span>
    </a>
</li>
</ul>

<ul class="nav navbar-nav visible-md">
    <li class="nav-link__compare">
    <a class="navbar-link" href="https://www.usedcarsni.com/mystocklist.php" title="Compare" target="_top" onclick="stat_counter(559, '', 'https://www.usedcarsni.com/');" rel="sidebar">
        <span>Compare</span>
    </a>
</li>

<li class="">
    <a class="navbar-link" href="https://www.usedcarsni.com/get_updates?search_type=1" title="Vehicle Alerts" target="_top">
        <span>Vehicle Alerts</span>
    </a>
</li>

<li class="">
    <a class="navbar-link" href="https://www.usedcarsni.com/login_page.php" title="Login" target="_top">
        <span>Login</span>
    </a>
</li>
</ul>

<ul class="nav navbar-nav visible-sm">
    <li class="">
    <a class="navbar-link" href="https://www.usedcarsni.com/price-checker" title="Price Checker" target="_top">
        <span>Price Checker</span>
    </a>
</li>

<li class="nav-link__compare">
    <a class="navbar-link" href="https://www.usedcarsni.com/mystocklist.php" title="Compare" target="_top" onclick="stat_counter(559, '', 'https://www.usedcarsni.com/');" rel="sidebar">
        <span>Compare</span>
    </a>
</li>

<li class="">
    <a class="navbar-link" href="https://www.usedcarsni.com/get_updates?search_type=1" title="Vehicle Alerts" target="_top">
        <span>Vehicle Alerts</span>
    </a>
</li>

<li class="">
    <a class="navbar-link" href="https://www.usedcarsni.com/advertise" title="Sell Your Vehicle" target="_top">
        <span>Sell Your Vehicle</span>
    </a>
</li>

<li class="">
    <a class="navbar-link" href="https://www.usedcarsni.com/login_page.php" title="Login" target="_top">
        <span>Login</span>
    </a>
</li>
</ul>

<ul class="nav navbar-nav visible-xs">
    <li class="">
    <a class="navbar-link" href="https://www.usedcarsni.com/price-checker" title="Price Checker" target="_top">
        <span>Price Checker</span>
    </a>
</li>

<li class="nav-link__compare">
    <a class="navbar-link" href="https://www.usedcarsni.com/mystocklist.php" title="Compare" target="_top" onclick="stat_counter(559, '', 'https://www.usedcarsni.com/');" rel="sidebar">
        <span>Compare</span>
    </a>
</li>

<li class="">
    <a class="navbar-link" href="https://www.usedcarsni.com/get_updates?search_type=1" title="Vehicle Alerts" target="_top">
        <span>Vehicle Alerts</span>
    </a>
</li>

<li class="">
    <a class="navbar-link" href="https://www.usedcarsni.com/advertise" title="Sell Your Vehicle" target="_top">
        <span>Sell Your Vehicle</span>
    </a>
</li>

<li class="">
    <a class="navbar-link" href="https://www.usedcarsni.com/login_page.php" title="Login" target="_top">
        <span>Login</span>
    </a>
</li>
</ul>

<ul class="nav navbar-nav visible-xss">
    <li class="">
    <a class="navbar-link" href="https://www.usedcarsni.com/price-checker" title="Price Checker" target="_top">
        <span>Price Checker</span>
    </a>
</li>

<li class="nav-link__compare">
    <a class="navbar-link" href="https://www.usedcarsni.com/mystocklist.php" title="Compare" target="_top" onclick="stat_counter(559, '', 'https://www.usedcarsni.com/');" rel="sidebar">
        <span>Compare</span>
    </a>
</li>

<li class="">
    <a class="navbar-link" href="https://www.usedcarsni.com/get_updates?search_type=1" title="Vehicle Alerts" target="_top">
        <span>Vehicle Alerts</span>
    </a>
</li>

<li class="">
    <a class="navbar-link" href="https://www.usedcarsni.com/advertise" title="Sell Your Vehicle" target="_top">
        <span>Sell Your Vehicle</span>
    </a>
</li>

<li class="">
    <a class="navbar-link" href="https://www.usedcarsni.com/login_page.php" title="Login" target="_top">
        <span>Login</span>
    </a>
</li>
</ul>


        </div>
    </div>
</nav>
    <div class="navbar navbar-default navbar-static-top">
    <div class="navbar-left">
        <nav role="navigation">
            <ul id="subnav" class="nav navbar-nav top-subnav">
                <li class="">
    <a class="navbar-link" href="https://www.usedcarsni.com/cars" title="Used Cars" target="_top">
       <strong>Used Cars</strong>
    </a>
</li>

<li class="">
    <a class="navbar-link" href="https://new-cars.usedcarsni.com" title="New Cars" target="_top">
        <span>New Cars</span>
    </a>
</li>

<li class="">
    <a class="navbar-link" href="https://www.usedcarsni.com/van_search.php" title="Vans" target="_top">
        <span>Vans</span>
    </a>
</li>

<li class="">
    <a class="navbar-link" href="https://www.usedcarsni.com/auto_salvage_search.php" title="Salvage" target="_top">
        <span>Salvage</span>
    </a>
</li>

<li class="">
    <a class="navbar-link" href="https://www.usedcarsni.com/motorbike_search.php" title="Motorbikes" target="_top">
        <span>Motorbikes</span>
    </a>
</li>

<li class="">
    <a class="navbar-link" href="https://www.usedcarsni.com/leisure-search" title="Leisure" target="_top">
        <span>Leisure</span>
    </a>
</li>

<li class="">
    <a class="navbar-link" href="https://www.usedcarsni.com/machinery_search.php" title="Farm/Plant" target="_top">
        <span>Farm/Plant</span>
    </a>
</li>

<li class="">
    <a class="navbar-link" href="https://www.usedcarsni.com/accessories" title="Registrations" target="_top">
        <span>Registrations</span>
    </a>
</li>

<li class="">
    <a class="navbar-link" href="https://www.usedcarsni.com/car-parts" title="Parts" target="_top">
        <span>Parts</span>
    </a>
</li>

<li class="">
    <a class="navbar-link" href="https://www.usedcarsni.com/price-checker" title="Price Checker" target="_top">
        <span>Price Checker</span>
    </a>
</li>
                <li class="dropdown">
                    <a id="More" href="#" data-hover="dropdown" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">More <span class="caret"></span></a>
                    <ul id="submenu-dropdown" class="dropdown-menu" aria-labelledby="More"></ul>
                </li>
            </ul>
        </nav>
    </div>
    <div class="navbar-right">
        
        <div id="advertise-button-lg" class="navbar-right navbar-btn add-half-right hidden-sm hidden-xs hidden-xss">
            <button class="btn btn-sm btn-default" role="link">Sell Your Vehicle</button>
        </div>
        

        <div id="trust-bar" class="trust-bar navbar-right navbar-btn add-half-right hidden-sm hidden-xs hidden-xss">
    <a href="/what_our_customers_say">
        <div class="trust-rating-container">
            <img class="trust-rating-img" src="/images/trustpilot/4.5-stars.png?v=1.1" alt="TrustPilot stars" />
        </div>
        <div class="trust-logo">
            <img class="trustbar-logo" src="/images/trustpilot/trustpilot_logo_small.svg?v=1.1"
                 alt="TrustPilot reviews" />
        </div>
    </a>
</div>
    </div>
</div>
</header>


<div class="with-bg banner-desktop">
    <div id="USE_D_Search_Top"></div>
</div>
<div class="with-bg banner-mobile">
    <div id="USE_M_Search_Top"></div>
</div>

<main class="">
    
    
    
    
    
    
    <!-- leaderboard -->
    <div style="display:none;" id="leaderboard-place-mobile"></div>
    
    
    <div style="display:none;" id="leaderboard-place"></div>
    
    <!-- script src="/responsive/js/leaderboard.js" type="text/javascript"></script-removed-RM1018 -->
    <!-- /leaderboard -->
    <link rel="stylesheet" type="text/css" href="/responsive/styles/shortlist.css?v=1782" />
<script type="text/javascript" src="/js/shortlist/LocalStorageAdapter.js?v=1782"></script>
<script type="text/javascript">
    var searchFormLink = '/cars';
    $(function(){
        window.mobileTabs = new MobileTabs(false);
    });
    let shortlistItems = new LocalStorageAdapter('shortlist_items#').getItems();
</script>
<script type="text/javascript" src="/js/shortlist/ShortlistDetailPage.js?v=1782"></script>
<script type="text/javascript" src="/responsive/js/search_page_functions.js?v=1782"></script>

<script type="text/javascript">
    $(function () {
        let pairs = new Map();
        Array.from(document.getElementsByClassName('shortlist-btn-in-title')).forEach(function (button) {
            let carId = button.getAttribute('data-car-id');
            pairs.set(
                carId,
                pairs.has(carId)
                    ? [pairs.get(carId)[0], button]
                    : [button]
            );
        });

        let idVehicleNames = {"311807913":"2007 BMW 3 Series","300895568":"2005 BMW 3 Series","312472179":"2007 BMW 3 Series","312683279":"2006 BMW 3 Series","312065966":"2010 BMW 3 Series","296095324":"2008 BMW 3 Series","308976469":"2009 BMW 3 Series","309107870":"2009 BMW 3 Series","312400834":"2010 BMW 3 Series","306544455":"2012 BMW 3 Series","311486791":"2011 BMW 3 Series","312668149":"2010 BMW 3 Series","311728956":"2022 BMW GT","300066951":"2010 BMW 3 Series","310305114":"2008 BMW 3 Series","293806510":"2014 BMW 3 Series","309726936":"2012 BMW 3 Series","311762039":"2012 BMW 3 Series","305465340":"2010 BMW 3 Series","311649494":"2012 BMW 3 Series"};

        

        pairs.forEach(sameButtons => {
            let button = sameButtons[0];
            let carId = Number(button.getAttribute('data-car-id'));
            let isAuthenticated = button.getAttribute('data-is-authenticated');
            let isAlready = button.getAttribute('data-is-already');
            let carIdString = carId.toString();
            const shortlist = new ShortlistDetailPage(
                new LocalStorageAdapter('shortlist_items#'),
                {
                    urlAdd: '/ajax_shortlist.php?action=add&id=' + carId,
                    urlRemove: '/ajax_shortlist.php?action=remove&id=' + carId,
                    shortlistPageUrl: '/mystocklist.php',
                    heartUnfilled: '/responsive/images/heart-unfilled.svg',
                    heartFilled: '/responsive/images/heart-filled.svg',
                    vehicleId: carId,
                    vehicleName: idVehicleNames[carId],
                    isAuthenticated: !!isAuthenticated
                },
                function () {
                    
                    stat_counter('560', carIdString, '')
                },
                !!isAlready
            );
            shortlist.init(sameButtons);
        })
    });
</script>



<script type="text/javascript"
        src="https://plugins.codeweavers.net/scripts/v1/platform/launcher?ApiKey=kf3D3XEVHf5oc3C22H"></script>

<link rel="stylesheet" type="text/css" href="/responsive/styles/search-page.css?v=1782" />
<link rel="stylesheet" type="text/css" href="/responsive/styles/footer-updates.css?v=1782" />


<link rel="stylesheet" type="text/css" href="/responsive/styles/sort_refine_mobile.css?v=1782" />
<nav class="navbar navbar-default mobile-navbar navbar-static-top visible-sm visible-xs visible-xss">
    <div class="options__wrapper">
        <div class="options options__sort">
            <div class="sort-header">Sort</div>
            <form>
                <ul>
                    
<li value="18|1">
    <input name="sort" type="radio" checked>
    <label>Price Low To High</label>
    <div class="check"></div>
</li>

<li value="6|0">
    <input name="sort" type="radio" >
    <label>Price High To Low</label>
    <div class="check"></div>
</li>

<li value="19|1">
    <input name="sort" type="radio" >
    <label>Mileage Low To High</label>
    <div class="check"></div>
</li>

<li value="12|0">
    <input name="sort" type="radio" >
    <label>Most Recently Added</label>
    <div class="check"></div>
</li>

                </ul>
            </form>
        </div>
    </div>
    <div class="affix-container">
        <div id="affix">
            <div class="row">
                <div class="col-xs-12">
                    <div class="results">
                        1 to 20 of 360
                    </div>
                    <div class="btn-group actions" role="group">
                        
                        <button type="button" class="btn btn-sort"><span class="icon glyphicon glyphicon-sort"></span>
                            <span class="text">Sort</span></button>
                        
                        <a href="/cars" data-href="#searchForm" type="button" class="btn"><span
                                class="icon slider"></span> Refine</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</nav>
<script type="text/javascript" src="/responsive/js/sort_refine_mobile.js?v=1782"></script>







<div id="search-results-list" class="col-xl-14 no-padding add-half-row">
    <div id="search-form">
    <form method="get" action="/search_results.php" id="findForm"
          class="col-md-10 col-lg-12 hidden-sm hidden-xs hidden-xss add-inner-height no-side-padding"
          style="clear: both;">
        <input type="hidden" name="search_type" id="search_type" value="1" class="dont-disable"/>
        

<div class="search-result-panel visible-sm-block visible-md-block visible-lg-block visible-xl">
    
<div class="pull-left">
    <b>REFINE SEARCH</b>
</div>
<div class="pull-right top-search-options-links">
    <a href="/search_results.php?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&tab_id=0&search_type=28&ivendi_term=36&ivendi_deposit=0&ivendi_payment_from=0&ivendi_payment_to=0" class="more-options-link ">SEARCH BY MONTHLY COST</a>
    <a class="show_more more-options-link" 
style="display:none;"
>MORE OPTIONS</a>
    <a class="show_less more-options-link" >FEWER OPTIONS</a>
    <a href="#" class="reset_link more-options-link">CLEAR ALL</a>
</div>
<div class="clearfix"></div>
<hr class="form-line__grey"/>

</div>

<div class="form-group col-md-2 col-lg-4 no-lpadding">
    
<select id="make" name="make" class="form-control bg-default dont-disable" data-default-value="0"
        data-not-sure-option-url="/vehicle_type.php"
        data-search-by-class-stat="632"
        placeholder="Make">
    <option value="0">Make</option><option value="-10" class="option_url_class hidden-xss hidden-xs hidden-sm" >Not Sure? Search by Class</option><option value="137">Abarth (13)</option><option value="5">Alfa Romeo (27)</option><option value="70">Aston Martin (15)</option><option value="1">Audi (1,980)</option><option value="54">Austin (1)</option><option value="46">Bentley (20)</option><option value="2" selected="selected">BMW (360)</option><option value="42">Chevrolet (9)</option><option value="3">Chrysler (7)</option><option value="4">Citroen (646)</option><option value="297999814">Cupra (5)</option><option value="793">Dacia (186)</option><option value="34">Daihatsu (1)</option><option value="48">Dodge (1)</option><option value="170978731">DS (138)</option><option value="43">Ferrari (5)</option><option value="6">Fiat (174)</option><option value="7">Ford (1,629)</option><option value="116307351">Great Wall (2)</option><option value="8">Honda (265)</option><option value="53">Hummer (1)</option><option value="9">Hyundai (672)</option><option value="799">Infiniti (4)</option><option value="10">Isuzu (45)</option><option value="11">Jaguar (181)</option><option value="12">Jeep (47)</option><option value="13">Kia (662)</option><option value="65">Lamborghini (4)</option><option value="14">Land Rover (640)</option><option value="36">Lexus (67)</option><option value="51">Maserati (12)</option><option value="15">Mazda (262)</option><option value="167026535">McLaren (3)</option><option value="16">Mercedes (1,209)</option><option value="17">MG (84)</option><option value="18">MINI (316)</option><option value="19">Mitsubishi (224)</option><option value="20">Nissan (696)</option><option value="21">Opel (1)</option><option value="22">Peugeot (801)</option><option value="311279897">Polestar (3)</option><option value="23">Porsche (121)</option><option value="24">Renault (518)</option><option value="44">Rolls-Royce (1)</option><option value="26">SAAB (7)</option><option value="27">Seat (730)</option><option value="28">Skoda (513)</option><option value="47">Smart (14)</option><option value="41">SsangYong (22)</option><option value="40">Subaru (14)</option><option value="29">Suzuki (152)</option><option value="807">TESLA (40)</option><option value="30">Toyota (748)</option><option value="50">TVR (1)</option><option value="31">Vauxhall (960)</option><option value="32">Volkswagen (2,316)</option><option value="33">Volvo (297)</option><option value="67">Westfield (1)</option><option value="-10" class="option_url_class hidden-xss hidden-xs hidden-sm" >Not Sure? Search by Class</option>
</select>

</div>

<div class="form-group col-md-2 col-lg-2">
    
<select id="fuel_type" name="fuel_type" class="form-control bg-default dont-disable" data-default-value="0"
        placeholder="Fuel Type">
    <option value="0">Fuel Type</option>
    <option value="1">Petrol (35)</option><option value="2">Diesel (308)</option><option value="13">Electric (1)</option><option value="6270282">Hybrid (16)</option>
</select>

</div>

<div class="form-group col-md-2 col-lg-2">
    
<select id="age_from" name="age_from" data-role="selector" data-type="from" data-group="year"
        class="form-control bg-default dont-disable" data-default-value="0" placeholder="Year From">
    <option value="0">Year From</option>
    <option value="2022">2022 (12)</option><option value="2021">2021 (27)</option><option value="2020">2020 (43)</option><option value="2019">2019 (76)</option><option value="2018">2018 (123)</option><option value="2017">2017 (167)</option><option value="2016">2016 (196)</option><option value="2015">2015 (237)</option><option value="2014">2014 (278)</option><option value="2013">2013 (306)</option><option value="2012">2012 (337)</option><option value="2011">2011 (341)</option><option value="2010">2010 (349)</option><option value="2009">2009 (351)</option><option value="2008">2008 (355)</option><option value="2007">2007 (358)</option><option value="2006">2006 (359)</option><option value="2005">2005 (360)</option>
</select>

</div>

<div class="form-group col-md-2 col-lg-2">
    
<select id="price_from" name="price_from" data-role="selector" data-big="1" data-type="from" data-group="price"
        class="form-control bg-default dont-disable" data-default-value="0" placeholder="Price From">
    <option value="0">Price From</option>
    <option value="2000">&pound;2,000 (356)</option><option value="3000">&pound;3,000 (355)</option><option value="4000">&pound;4,000 (350)</option><option value="5000">&pound;5,000 (347)</option><option value="6000">&pound;6,000 (338)</option><option value="7000">&pound;7,000 (317)</option><option value="8000">&pound;8,000 (297)</option><option value="9000">&pound;9,000 (283)</option><option value="10000">&pound;10,000 (263)</option><option value="11000">&pound;11,000 (240)</option><option value="12000">&pound;12,000 (221)</option><option value="13000">&pound;13,000 (197)</option><option value="14000">&pound;14,000 (175)</option><option value="15000">&pound;15,000 (152)</option><option value="16000">&pound;16,000 (129)</option><option value="18000">&pound;18,000 (104)</option><option value="20000">&pound;20,000 (86)</option><option value="25000">&pound;25,000 (60)</option><option value="30000">&pound;30,000 (35)</option><option value="40000">&pound;40,000 (3)</option>
</select>


</div>

<div class="form-group col-md-2 col-lg-2 no-rpadding">
    
<select id="user_type" name="user_type" class="form-control bg-default dont-disable" data-default-value="0"
        placeholder="Seller Type">
    <option value="0">Seller Type</option>
    <option value="1">Private (12)</option><option value="2|4">Trade (348)</option>
</select>

</div>

<div class="form-group col-md-2 col-lg-4 no-lpadding">
    
<select id="model" name="model" class="form-control bg-default dont-disable" data-default-value="0" placeholder="Model">
    <option value="0">Model</option><option value="395362">1 Series (176)</option><option value="152692631">2 Series (74)</option><option value="310758647">2 Series Gran Tourer (5)</option><option value="139959" selected="selected">3 Series (360)</option><option value="130390641">4 Series (212)</option><option value="9078">5 Series (220)</option><option value="395363">6 Series (7)</option><option value="395364">7 Series (9)</option><option value="17113562">8 Series (9)</option><option value="203957288">i3 (13)</option><option value="180486982">i8 (2)</option><option value="207836415">M2 (4)</option><option value="824">M3 (27)</option><option value="146671409">M4 (38)</option><option value="7653">M5 (14)</option><option value="278177">M6 (4)</option><option value="290182067">M8 (1)</option><option value="29100118">X1 (57)</option><option value="216474895">X2 (26)</option><option value="4846">X3 (37)</option><option value="152692627">X4 (18)</option><option value="827">X5 (166)</option><option value="16855076">X6 (20)</option><option value="290340239">X7 (2)</option><option value="7429">Z3 (1)</option><option value="11192">Z4 (12)</option>
</select>

</div>

<div class="form-group col-md-2 col-lg-2">
    
<select id="trans_type" name="trans_type" class="form-control bg-default dont-disable" data-default-value="0"
        placeholder="Transmission">
    <option value="0">Transmission</option><option value="1">Manual (140)</option><option value="2">Automatic/Other (220)</option>
</select>

</div>

<div class="form-group col-md-2 col-lg-2">
    
<select id="age_to" name="age_to" data-role="selector" data-type="to" data-group="year" class="form-control bg-default dont-disable" data-default-value="0" placeholder="Year To">
    <option value="0">Year To</option>
    <option value="2022">2022 (360)</option><option value="2021">2021 (348)</option><option value="2020">2020 (333)</option><option value="2019">2019 (317)</option><option value="2018">2018 (284)</option><option value="2017">2017 (237)</option><option value="2016">2016 (193)</option><option value="2015">2015 (164)</option><option value="2014">2014 (123)</option><option value="2013">2013 (82)</option><option value="2012">2012 (54)</option><option value="2011">2011 (23)</option><option value="2010">2010 (19)</option><option value="2009">2009 (11)</option><option value="2008">2008 (9)</option><option value="2007">2007 (5)</option><option value="2006">2006 (2)</option><option value="2005">2005 (1)</option>
</select>

</div>

<div class="form-group col-md-2 col-lg-2">
    
<select id="price_to" name="price_to" data-role="selector" data-big="1" data-type="to" data-group="price"
        class="form-control bg-default dont-disable" data-default-value="0" placeholder="Price To">
    <option value="0">Price To</option>
    <option value="3000">&pound;3,000 (1)</option><option value="4000">&pound;4,000 (6)</option><option value="5000">&pound;5,000 (9)</option><option value="6000">&pound;6,000 (18)</option><option value="7000">&pound;7,000 (39)</option><option value="8000">&pound;8,000 (59)</option><option value="9000">&pound;9,000 (73)</option><option value="10000">&pound;10,000 (93)</option><option value="11000">&pound;11,000 (116)</option><option value="12000">&pound;12,000 (135)</option><option value="13000">&pound;13,000 (159)</option><option value="14000">&pound;14,000 (181)</option><option value="15000">&pound;15,000 (204)</option><option value="16000">&pound;16,000 (227)</option><option value="18000">&pound;18,000 (252)</option><option value="20000">&pound;20,000 (270)</option><option value="25000">&pound;25,000 (296)</option><option value="30000">&pound;30,000 (321)</option><option value="40000">&pound;40,000 (353)</option><option value="60000">&pound;60,000 (356)</option>
</select>

</div>

<div class="form-group col-md-2 col-lg-2 no-rpadding">
    
<select id="mileage_to" name="mileage_to" class="form-control bg-default dont-disable" data-default-value="0" placeholder="Max. Miles">
    <option value="0">Max. Miles</option>
    <option value="10000">Up to 10,000 miles (16)</option><option value="20000">Up to 20,000 miles (31)</option><option value="30000">Up to 30,000 miles (50)</option><option value="40000">Up to 40,000 miles (69)</option><option value="50000">Up to 50,000 miles (99)</option><option value="60000">Up to 60,000 miles (143)</option><option value="70000">Up to 70,000 miles (180)</option><option value="80000">Up to 80,000 miles (209)</option><option value="90000">Up to 90,000 miles (240)</option><option value="100000">Up to 100,000 miles (270)</option><option value="125000">Up to 125,000 miles (328)</option><option value="150000">Up to 150,000 miles (353)</option><option value="200000">Up to 200,000 miles (359)</option>
</select>

</div>

<div class="clearfix"></div>
<div class="form-inline filter-location">
    
    
    <div class="form-group col-md-2 col-lg-4">
        
<select id="model_variant_id" name="model_variant_id[]" class="model_variant_id form-control bg-default dont-disable"
        data-default-value="0" placeholder="Variant" multiple size="1" data-base-model="999999" >
    <option value="0" class="hidden" hidden>Variant</option>
    <option value="999999">Base Model (3)</option><option value="63">EfficientDynamics (20)</option><option value="742">EfficientDynamics Business (2)</option><option value="182">EfficientDynamics Plus (14)</option><option value="361">EfficientDynamics Sport (3)</option><option value="52">ES (7)</option><option value="226">Luxury (5)</option><option value="16">M Sport (186)</option><option value="610">M Sport Shadow Edition (15)</option><option value="1318">M340d (2)</option><option value="1352">M340i (2)</option><option value="1312">Modern (1)</option><option value="127">Performance Edition (1)</option><option value="1">SE (38)</option><option value="650">SE Business Edition (2)</option><option value="7">Sport (50)</option><option value="521">Sport Plus (1)</option><option value="577">Sport Plus Edition (3)</option>
</select>

    </div>
    <div class="form-group col-md-2 col-lg-2 keywords-input-with-variant">
        
<input id="keywords" name="keywords" type="text" class="form-control" value="" placeholder="Keywords" data-default-value="" data-emptyValue="" />

    </div>
    
    
<div class="form-group col-xs-6 col-sm-3 col-sm-push-1 col-sm-6 visible-xs visible-sm">
    <input type="hidden" name="distance_enabled" value="1"/>
    
<select id="distance_miles" name="distance_miles" class="form-control bg-default dont-disable" data-default-value="50"
        placeholder="50">
    <option value="50" selected="selected">50</option>
</select>

</div>
<div class="form-group col-lg-4 col-md-4 no-lpadding">
    <div class="pull-left">
        <input type="hidden" id="distance_enabled_id" class="radio" name="distance_enabled" value="1" role="radio"  />&nbsp;Within
        <div class="miles-of body-font-size">
            
<select id="distance_miles" name="distance_miles" class="form-control bg-default dont-disable" data-default-value="50"
        placeholder="50">
    <option value="50" selected="selected">50</option>
</select>

        </div>
        &nbsp;miles of
    </div>
    
<div class="pull-right input-group filter-postcode postcode-filter-width">
    <input name="distance_postcode" type="text" class="form-control distance_postcode" value="" placeholder="Postcode" data-default-value="empty" />
    <div class="input-group-addon hidden-xss target-button-small detect_location">&nbsp;</div>
</div>

</div>
<div class="col-md-2 col-lg-2 no-rpadding pull-right">
    <button class="btn btn-primary" type="submit" style="width:100%;"><b><i>FIND</i></b>
        (<span class="mobile-spinner"></span><span class="result items-count"></span>)
    </button>
</div>

    
</div>

        <div class="clearfix"></div>
        
        <div class="clearfix"></div>
        
<div class="more-options form-last-line-margin col-xss-12 col-xs-12 no-padding" >
    <div class="col-xss-6 col-sm-3 col-md-2 col-lg-2 no-lpadding">
        
<select id="body_style" name="body_style" class="body_style form-control bg-default dont-disable" data-default-value="0"
        placeholder="Body Style">
    <option value="0">Body Style</option><option value="5">Convertible (2)</option><option value="6">Coupe (10)</option><option value="9">Estate (40)</option><option value="85">Saloon (305)</option>
</select>

    </div>
    <div class="col-xss-6 col-sm-3 col-md-2 col-lg-2">
        
<select id="eng_size" name="eng_size[]" class="eng_size form-control bg-default dont-disable" data-default-value="0"
        placeholder="Engine Size" multiple size="1">
    <option value="0" class="hidden" hidden>Engine Size</option>
    <option value="999">Below 1.0 L (1)</option><option value="1500">1.5 L (2)</option><option value="1600">1.6 L (3)</option><option value="1900">1.9 L (1)</option><option value="2000">2.0 L (311)</option><option value="3000">3.0 L (38)</option>
</select>

    </div>
    <div class="col-xss-6 col-sm-3 col-md-2 col-lg-2">
        
<select id="doors" name="doors[]" class="doors form-control bg-default dont-disable" data-default-value="999999"
        placeholder="Doors" multiple size="1">
    <option value="1">1 Door (1)</option><option value="2">2 Door (12)</option><option value="3">3 Door (1)</option><option value="4">4 Door (300)</option><option value="5">5 Door (41)</option>
</select>

    </div>
    <div class="col-xss-6 col-sm-3 col-md-2 col-lg-2 colour-control">
        
<select id="colour" name="colour[]" class="colour form-control bg-default dont-disable" data-default-value="0"
        placeholder="Colour" multiple size="1">
    <option value="808"class="cl-white search-colour">White (111)</option><option value="794"class="cl-black search-colour">Black (61)</option><option value="822"class="cl-grey search-colour">Grey (69)</option><option value="796"class="cl-blue search-colour">Blue (72)</option><option value="788"class="cl-red search-colour">Red (25)</option><option value="798"class="cl-silver search-colour">Silver (15)</option><option value="810"class="cl-cream-gold search-colour">Cream/Gold (2)</option><option value="16383"class="cl-orange search-colour">Orange (4)</option><option value="1171"class="cl-bronze-brown search-colour">Bronze/Brown (2)</option>
</select>

    </div>
</div>

    </form>
</div>
<div class="clearfix"></div>
    <div class="clearfix"></div>

    
    <nav class="navbar navbar-static-top hidden-sm hidden-xs hidden-xss title-bar">
        <div class="navbar-text pull-left title-bar-title-top h1-capitalize">
            <h1>Used BMW 3 Series For Sale</h1>
            <div class="page-control-label">
                
                    1 to 20 of 360
                
                
            </div>
        </div>

        <div class="navbar-form no-padding pull-right title-bar-controls">
            <ul class="navbar-navigation pagination text-center hidden-xss hidden-xs hidden-sm">
    
<li class="active"><a href="/search_results.php?make=2&model=139959&search_type=1&age_from=0&age_to=0&body_style=0&distance_enabled=0&distance_postcode=&fuel_type=0&homepage_search_attr=1&keywords=&mileage_to=0&pagepc0=1&price_from=0&price_to=0&tab_id=0&trans_type=0&user_type=0">1</a></li>

<li><a href="/search_results.php?make=2&model=139959&search_type=1&age_from=0&age_to=0&body_style=0&distance_enabled=0&distance_postcode=&fuel_type=0&homepage_search_attr=1&keywords=&mileage_to=0&pagepc0=2&price_from=0&price_to=0&tab_id=0&trans_type=0&user_type=0">2</a></li>

<li><a href="/search_results.php?make=2&model=139959&search_type=1&age_from=0&age_to=0&body_style=0&distance_enabled=0&distance_postcode=&fuel_type=0&homepage_search_attr=1&keywords=&mileage_to=0&pagepc0=3&price_from=0&price_to=0&tab_id=0&trans_type=0&user_type=0">3</a></li>

<li><a href="/search_results.php?make=2&model=139959&search_type=1&age_from=0&age_to=0&body_style=0&distance_enabled=0&distance_postcode=&fuel_type=0&homepage_search_attr=1&keywords=&mileage_to=0&pagepc0=4&price_from=0&price_to=0&tab_id=0&trans_type=0&user_type=0">4</a></li>

<li><a href="/search_results.php?make=2&model=139959&search_type=1&age_from=0&age_to=0&body_style=0&distance_enabled=0&distance_postcode=&fuel_type=0&homepage_search_attr=1&keywords=&mileage_to=0&pagepc0=5&price_from=0&price_to=0&tab_id=0&trans_type=0&user_type=0">5</a></li>

<li><a href="/search_results.php?make=2&model=139959&search_type=1&age_from=0&age_to=0&body_style=0&distance_enabled=0&distance_postcode=&fuel_type=0&homepage_search_attr=1&keywords=&mileage_to=0&pagepc0=2&price_from=0&price_to=0&tab_id=0&trans_type=0&user_type=0">Next</a></li>

</ul>
<div class="ul-center-align">
    <ul class="navbar-navigation mobile-pagination pagination text-center hidden-md hidden-lg hidden-xl">
        
<li class="active"><a href="/search_results.php?make=2&model=139959&search_type=1&age_from=0&age_to=0&body_style=0&distance_enabled=0&distance_postcode=&fuel_type=0&homepage_search_attr=1&keywords=&mileage_to=0&pagepc0=1&price_from=0&price_to=0&tab_id=0&trans_type=0&user_type=0">1</a></li>

<li><a href="/search_results.php?make=2&model=139959&search_type=1&age_from=0&age_to=0&body_style=0&distance_enabled=0&distance_postcode=&fuel_type=0&homepage_search_attr=1&keywords=&mileage_to=0&pagepc0=2&price_from=0&price_to=0&tab_id=0&trans_type=0&user_type=0">2</a></li>

<li><a href="/search_results.php?make=2&model=139959&search_type=1&age_from=0&age_to=0&body_style=0&distance_enabled=0&distance_postcode=&fuel_type=0&homepage_search_attr=1&keywords=&mileage_to=0&pagepc0=3&price_from=0&price_to=0&tab_id=0&trans_type=0&user_type=0">3</a></li>

<li><a href="/search_results.php?make=2&model=139959&search_type=1&age_from=0&age_to=0&body_style=0&distance_enabled=0&distance_postcode=&fuel_type=0&homepage_search_attr=1&keywords=&mileage_to=0&pagepc0=4&price_from=0&price_to=0&tab_id=0&trans_type=0&user_type=0">4</a></li>

<li><a href="/search_results.php?make=2&model=139959&search_type=1&age_from=0&age_to=0&body_style=0&distance_enabled=0&distance_postcode=&fuel_type=0&homepage_search_attr=1&keywords=&mileage_to=0&pagepc0=5&price_from=0&price_to=0&tab_id=0&trans_type=0&user_type=0">5</a></li>

<li><a href="/search_results.php?make=2&model=139959&search_type=1&age_from=0&age_to=0&body_style=0&distance_enabled=0&distance_postcode=&fuel_type=0&homepage_search_attr=1&keywords=&mileage_to=0&pagepc0=2&price_from=0&price_to=0&tab_id=0&trans_type=0&user_type=0">Next</a></li>

    </ul>
</div>
        </div>
        
        <div class="navbar-form no-padding pull-right title-bar-controls">
            <select class="form-control bg-default navbar-btn search-order"  onChange="document.location = '/search_results.php?make=2&model=139959&search_type=1&age_from=0&age_to=0&body_style=0&distance_enabled=0&distance_postcode=&fuel_type=0&homepage_search_attr=1&keywords=&mileage_to=0&price_from=0&price_to=0&tab_id=0&trans_type=0&user_type=0&sortby=' + this.value;">
                <option value="18|1" selected>Price low to high</option><option value="6|0" >Price high to low</option><option value="19|1" >Mileage low to high</option><option value="12|0" >Most recently added</option>
            </select>
        </div>
        
    </nav>
    
    

    

    <div class="search-results">
        <aside class="banners-block hidden-sm hidden-xs hidden-xss">
            
            <div class="add-half-row banner-row pull-right">
                
            <a rel="nofollow" onclick="stat_counter('30', '178285472', 'https://www.usedcarsni.com/')"  target="_blank" href="https://www.charleshurstgroup.co.uk/used-cars/even-better-value?utm_campaign=Group%20EBV%20Button&utm_medium=referral&utm_source=UCNI" title="Charles Hurst Reduced Stock">
                <img class="img-responsive right-ad" srcset="https://image.usedcarsni.com/panel/1/000/178/285/472/1660728337049d36dcc5.jpg, https://image.usedcarsni.com/panel/1/000/178/285/472/1660728337049d36dcc5.jpg 2x" src="https://image.usedcarsni.com/panel/1/000/178/285/472/1660728337049d36dcc5.jpg" alt="" />
            </a>
            
            </div>
            
            <div class="add-half-row banner-row pull-right">
                
            <a rel="nofollow" onclick="stat_counter('30', '169625826', 'https://www.usedcarsni.com/')"  target="_blank" href="http://www.mbmotorsni.co.uk/sourceit.html" title="MB Motors">
                <img class="img-responsive right-ad" srcset="https://image.usedcarsni.com/panel/1/000/169/625/826/1496672653a1488103f5.jpg?v=1671927857, https://image.usedcarsni.com/panel/1/000/169/625/826/14966727139ef1b8b195.jpg?v=1671927857 2x" src="https://image.usedcarsni.com/panel/1/000/169/625/826/1496672653a1488103f5.jpg?v=1671927857" alt="" />
            </a>
            
            </div>
            
            <div class="add-half-row banner-row pull-right">
                
            <a rel="nofollow" onclick="stat_counter('30', '175895925', 'https://www.usedcarsni.com/')"  target="_blank" href="https://www.usedcarsni.com/search_results.php?search_type=28&ivendi_term=60&ivendi_deposit=1000&make=0&fuel_type=0&age_from=0&ivendi_payment_from=0&user_type=0&model=0&trans_type=0&age_to=0&ivendi_payment_to=0&mileage_to=0&keywords=&distance_enabled=1&distance_miles=50&distance_postcode=&body_style=0&doors=999999&tax_cost=999999&car_class=" title="UCNI Monthly Payment Search">
                <img class="img-responsive right-ad" srcset="https://image.usedcarsni.com/panel/1/000/175/895/925/16571079019f6aa7a63d.jpg?v=1671927857, https://image.usedcarsni.com/panel/1/000/175/895/925/16571079019f6aa7a63d.jpg?v=1671927857 2x" src="https://image.usedcarsni.com/panel/1/000/175/895/925/16571079019f6aa7a63d.jpg?v=1671927857" alt="" />
            </a>
            
            </div>
            
            <div class="add-half-row banner-row pull-right">
                
            <a rel="nofollow" onclick="stat_counter('30', '176821324', 'https://www.usedcarsni.com/')"  target="_blank" href="https://usedcarsni.carmoney.co.uk/car-finance-calculator?utm_source=usedcarsni&utm_medium=display&utm_content=borrow-amount" title="CarMoney.co.uk">
                <img class="img-responsive right-ad" srcset="https://image.usedcarsni.com/panel/1/000/176/821/324/1575540935da71a8817e.png, https://image.usedcarsni.com/panel/1/000/176/821/324/1575540935da71a8817e.png 2x" src="https://image.usedcarsni.com/panel/1/000/176/821/324/1575540935da71a8817e.png" alt="" />
            </a>
            
            </div>
            
            <div class="add-half-row banner-row pull-right">
                
            <a rel="nofollow" onclick="stat_counter('30', '177271643', 'https://www.usedcarsni.com/')"  target="_blank" href="https://new-cars.usedcarsni.com/configurator/" title="New Car Section">
                <img class="img-responsive right-ad" srcset="https://image.usedcarsni.com/panel/1/000/177/271/643/1657107676311e658a14.png, https://image.usedcarsni.com/panel/1/000/177/271/643/1657107676311e658a14.png 2x" src="https://image.usedcarsni.com/panel/1/000/177/271/643/1657107676311e658a14.png" alt="" />
            </a>
            
            </div>
            
            <div class="add-half-row banner-row pull-right">
                
            <a rel="nofollow" onclick="stat_counter('30', '178362622', 'https://www.usedcarsni.com/')"  target="_blank" href="https://www.best4warranty.com/usedcarsni/?utm_source=Car-Warranty&utm_medium=Button&utm_campaign=Button-Click&utm_id=UsedCarsNI" title="Best4Warranty Car">
                <img class="img-responsive right-ad" srcset="https://image.usedcarsni.com/panel/1/000/178/362/622/16685129358ea155a4eb.jpg, https://image.usedcarsni.com/panel/1/000/178/362/622/16685129358ea155a4eb.jpg 2x" src="https://image.usedcarsni.com/panel/1/000/178/362/622/16685129358ea155a4eb.jpg" alt="" />
            </a>
            
            </div>
            
            <div class="add-half-row banner-row pull-right">
                
            <a rel="nofollow" onclick="stat_counter('30', '178375231', 'https://www.usedcarsni.com/')"  target="_blank" href="https://customsdeclaration.ie/product/customs-declaration-ireland-vehicle-import-ucni/" title="Customs Declarations.ie">
                <img class="img-responsive right-ad" srcset="https://image.usedcarsni.com/panel/1/000/178/375/231/16698946280caad33fca.png, https://image.usedcarsni.com/panel/1/000/178/375/231/16698946280caad33fca.png 2x" src="https://image.usedcarsni.com/panel/1/000/178/375/231/16698946280caad33fca.png" alt="" />
            </a>
            
            </div>
            
            <div class="add-half-row banner-row pull-right">
                
            <a rel="nofollow" onclick="stat_counter('30', '178378742', 'https://www.usedcarsni.com/')"  target="_blank" href="https://www.cmcarsni.co.uk/" title="CM Cars NI">
                <img class="img-responsive right-ad" srcset="https://image.usedcarsni.com/panel/1/000/178/378/742/1670235403626fe09ba8.jpg?v=1671927857, https://image.usedcarsni.com/panel/1/000/178/378/742/1670235403626fe09ba8.jpg?v=1671927857 2x" src="https://image.usedcarsni.com/panel/1/000/178/378/742/1670235403626fe09ba8.jpg?v=1671927857" alt="" />
            </a>
            
            </div>
            
            <div class="add-half-row banner-row pull-right">
                
            <a rel="nofollow" onclick="stat_counter('30', '99431373', 'https://www.usedcarsni.com/')"  target="_blank" href="https://www.jackreidcars.co.uk/Home.html" title="Jack Reid Cars">
                <img class="img-responsive right-ad" srcset="https://image.usedcarsni.com/panel/1/000/099/431/373/163525887413c5a3c8ae.jpg, https://image.usedcarsni.com/panel/1/000/099/431/373/163525887413c5a3c8ae.jpg 2x" src="https://image.usedcarsni.com/panel/1/000/099/431/373/163525887413c5a3c8ae.jpg" alt="" />
            </a>
            
            </div>
            
            <div class="add-half-row banner-row pull-right">
                
            <a rel="nofollow" onclick="stat_counter('30', '145573596', 'https://www.usedcarsni.com/')"  target="_blank" href="http://blog.usedcarsni.com/" title="UCNI Blog">
                <img class="img-responsive right-ad" srcset="https://image.usedcarsni.com/panel/1/000/145/573/596/1657107714d8a0bcd4aa.jpg?v=1671927857, https://image.usedcarsni.com/panel/1/000/145/573/596/1657107714d8a0bcd4aa.jpg?v=1671927857 2x" src="https://image.usedcarsni.com/panel/1/000/145/573/596/1657107714d8a0bcd4aa.jpg?v=1671927857" alt="" />
            </a>
            
            </div>
            
            <div class="add-half-row banner-row pull-right">
                
            <a rel="nofollow" onclick="stat_counter('30', '162941930', 'https://www.usedcarsni.com/')"  target="_blank" href="https://ucni.hpicheck.com/" title="HPI History Check">
                <img class="img-responsive right-ad" srcset="https://image.usedcarsni.com/panel/1/000/162/941/930/14869832011c1070ea5e.png?v=1671927857, https://image.usedcarsni.com/panel/1/000/162/941/930/14869832011c1070ea5e.png?v=1671927857 2x" src="https://image.usedcarsni.com/panel/1/000/162/941/930/14869832011c1070ea5e.png?v=1671927857" alt="" />
            </a>
            
            </div>
            
            

            

            

            
        </aside>
        
        <div class="car-list overflowed">
            <!-- WARNING: Automated extraction of vehicles is prohibited under the Terms of Use. --><article class="add-half-row overflowed-flex car-line ">
    <div class="car-caption visible-md">
        <div class="car-title overflowed-flex space-between">
            <div class="wrap-anywhere">
                <a href="/2007-BMW-3-Series-320d-M-Sport-4dr-311807913?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1">
                    <strong class="wrap-anywhere">
                        <span class="visible-md-inline visible-sm-inline">Sep 2007</span> BMW 3 Series 320d  M  Sport  4dr
                    </strong>
                </a>
            </div>
            <script type="text/javascript">showHeart(311807913, false, false);</script>
        </div>
        <p>
            
<span class="technical-subtitle">
                **2 GOOD 2 TRADE** - MOT DEC23
                </span>

        </p>
    </div>
    <div class="car-img">
        
        <a href="/2007-BMW-3-Series-320d-M-Sport-4dr-311807913?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1" title="View the details of this BMW 3 Series 320D M SPORT 4d 161 BHP in Antrim" >
            <picture>
                <!--[if IE 9]><video class="hidden"><![endif]-->
                <source srcset="https://image.usedcarsni.com/photos/000/311/807/913/312337157.400.jpg/999999/2x 2x" sizes="100vw" media="(min-width: 760px)" type="image/jpeg" />
                <!--[if IE 9]></video><![endif]-->
                <img class="img-responsive" src="https://image.usedcarsni.com/photos/000/311/807/913/312337157.200.jpg/999999/1x" alt="BMW 3 Series 320D M SPORT 4d 161 BHP in Antrim" />
                
                
                
<div class="photo-count-icon-cont 
photo-video-both-icon
 hidden-xss hidden-xs hidden-sm">
    
<div class="video-icon 
video-both-icon
">
<span class="glyphicon glyphicon-camera glyphicon glyphicon-facetime-video"></span>
</div>

    
<div class="photo-video-delimiter">|</div>

    
<div class="photo-icon 
photo-both-icon
">
<span class="glyphicon glyphicon-camera photo-count-icon"></span>
<div class="photo-count-count">45</div>
</div>

</div>

            </picture>
        </a>
        
        
    </div>
    <div class="car-description">
        <a href="/2007-BMW-3-Series-320d-M-Sport-4dr-311807913?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1"
           class="car-description-overlay-link visible-xss visible-xs visible-sm"
        > </a>
        <div class="car-caption hidden-md">
            <div class="car-title overflowed-flex space-between">
                <div>
                    <a href="/2007-BMW-3-Series-320d-M-Sport-4dr-311807913?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1">
                        <strong class="car-header overflowed">
                            <span class="visible-lg-inline visible-xl-inline">Sep 2007</span>
                            BMW 3 Series 320d  M  Sport  4dr
                        </strong>
                    </a>
                </div>
                <div>
                    <script type="text/javascript">showHeart(311807913, false, false);</script>
                </div>
            </div>
            <p>
                
<span class="technical-subtitle">
                **2 GOOD 2 TRADE** - MOT DEC23
                </span>

            </p>
        </div>
   <div class="car-short-info hidden-md hidden-lg hidden-xl overflowed">
            <div class="options-small">
            Sep 2007,
             </div>
            <div class="options-small">
            112000&nbsp;miles,
             </div>
            <div class="options-small ">
            DIESEL,
             </div>
            <div class="options-small ">
            Manual,
             </div>
            <div class="options-small load-length-hidden"> </div>
            <div class="options-small load-height-hidden"> </div>
            <div class="options-small payload-hidden"> </div>
            <div class="options-small towing-weight-hidden"> </div>
            <div class="options-small bstyle-hidden">
            Saloon,
             </div>
            <div class="options-small ">
            2.0 L,
             </div>
            <div class="options-small doors-hidden">
            4 Door,
             </div>
            <div class="options-small tax-cost-hidden">
            &pound;220 Tax p.a.,
             </div>
            <div class="options-small">Ballymena</div>
            <div></div>
            

            

            

            

            

            

            

            

            

            

            

            

            
            

        </div>
        <div class="car-price car-price-half-container hidden-xss hidden-lg hidden-xl pull-right">
            <div class="car-price-left-block text-left">
                <script type="text/javascript">car_writeSoldTextResp('');</script>
            </div>
            <div class="car-price-right-block text-right hidden-md">
                <strong class="monthly_price_hidden"></strong>
                <p class="retail-price--small monthly_price_hidden">Retail:
                    &pound;2,995</p>
                <div class=""><strong>
&pound;2,995
<div class="euroPrice hidden">2995</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>
</strong></div>
                
                <div class="seller-block">
                    
                
                <!--ul_begin--><img src="https://image.usedcarsni.com/user/000/026/077/297/1670241207db22196bab.svg"  class="img-responsive hq-logo-svg" alt="" /><!--ul_end-->
                
                

                
            
                    
            <div class="hidden-sm hidden-xs hidden-xss">
              <dt>Dealer Rating</dt>
              <dd>
            <div class="review-stars-new-empty">
              <div class="review-stars-new-whole" style="width: 100%;">
              </div>
            </div>
            </dd>
            </div>
            <div class="hidden-md hidden-lg hidden-xl">
              
            <div class="review-stars-new-empty">
              <div class="review-stars-new-whole" style="width: 100%;">
              </div>
            </div>
            
              <div class="seller-rating-text">Rating</div>
            </div>
            
                </div>
            </div>
        </div>
        <div class="visible-xss car-price-half-container pull-right">
            <script type="text/javascript">car_writeSoldTextResp('');</script>
            <strong class="monthly_price_hidden"></strong>
            <p class="retail-price--small monthly_price_hidden">Retail:
                &pound;2,995</p>
            <div class=""><strong>
&pound;2,995
<div class="euroPrice hidden">2995</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>
</strong></div>
            <p class="euro-price--small" ></p>
            
                
                <!--ul_begin--><img src="https://image.usedcarsni.com/user/000/026/077/297/1670241207db22196bab.svg"  class="img-responsive hq-logo-svg" alt="" /><!--ul_end-->
                
                

                
            
            
            <div class="hidden-sm hidden-xs hidden-xss">
              <dt>Dealer Rating</dt>
              <dd>
            <div class="review-stars-new-empty">
              <div class="review-stars-new-whole" style="width: 100%;">
              </div>
            </div>
            </dd>
            </div>
            <div class="hidden-md hidden-lg hidden-xl">
              
            <div class="review-stars-new-empty">
              <div class="review-stars-new-whole" style="width: 100%;">
              </div>
            </div>
            
              <div class="seller-rating-text">Rating</div>
            </div>
            
        </div>
    <div class="hidden-sm hidden-xs hidden-xss pull-left md-car-characteristics">
        <dl class="dl-horizontal other-ads">
            
                <dt>Mileage</dt><dd>112000 Miles</dd>
            
            
                <dt class="">Transmission</dt><dd class="">Manual</dd>
            
            
                <dt class="">Fuel Type</dt><dd class="">DIESEL</dd>
            
            
            
            
            
            
                <dt class="bstyle-hidden">Body Style</dt><dd class="bstyle-hidden">Saloon</dd>
            
            
                <dt class="">Engine Size</dt><dd class="">2.0 L</dd>
            
            
                <dt class="doors-hidden">Doors</dt><dd class="doors-hidden">4 Door</dd>
            
            
                <dt class="tax-cost-hidden">Standard Tax</dt><dd class="tax-cost-hidden">&pound;220 p.a.</dd>
            
            
            
            
                <dt>Location</dt><dd>Ballymena</dd>
            
            
            <dt class="hidden-xl hidden-lg monthly_price_hidden">
                Monthly Cost
            </dt>
            <dd class="hidden-xl hidden-lg monthly_price_hidden">
                
            </dd>
            <dt class="hidden-xl hidden-lg">
                Price
            </dt>
            <dd class="hidden-xl hidden-lg">
                
&pound;2,995
<div class="euroPrice hidden">2995</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>

            </dd>
            
            
            
            
            
            <div class="hidden-sm hidden-xs hidden-xss">
              <dt>Dealer Rating</dt>
              <dd>
            <div class="review-stars-new-empty">
              <div class="review-stars-new-whole" style="width: 100%;">
              </div>
            </div>
            </dd>
            </div>
            <div class="hidden-md hidden-lg hidden-xl">
              
            <div class="review-stars-new-empty">
              <div class="review-stars-new-whole" style="width: 100%;">
              </div>
            </div>
            
              <div class="seller-rating-text">Rating</div>
            </div>
            
            
            
            
            
            
            
            
            
            
            
            
            

            
            
            

            

            

            
            
            

            
        </dl>
    </div>

        <div class="price-centered--wider hidden-md hidden-sm hidden-xs hidden-xss">
            <div class="car-price-left-block text-left">
                <script type="text/javascript">car_writeSoldTextResp('');</script>
            </div>
            <p class="monthly-cost-price monthly_price_hidden"></p>
            <div class="retail-price--small monthly_price_hidden">Retail:
                &pound;2,995</div>
            <div class="">
                
&pound;2,995
<div class="euroPrice hidden">2995</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>

            </div>
            
        </div>

        <div class="visible-md visible-lg visible-xl car-seller">
            
                
                <!--ul_begin--><img src="https://image.usedcarsni.com/user/000/026/077/297/1670241207db22196bab.svg"  class="img-responsive hq-logo-svg" alt="" /><!--ul_end-->
                
                

                
            
            
        </div>
    </div>
    
<a href="/2007-BMW-3-Series-320d-M-Sport-4dr-311807913?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1" class="btn more-button btn-warning hidden-sm hidden-xs hidden-xss" role="button">More Details</a>

</article><!-- WARNING: Automated extraction of vehicles is prohibited under the Terms of Use. --><article class="add-half-row overflowed-flex car-line ">
    <div class="car-caption visible-md">
        <div class="car-title overflowed-flex space-between">
            <div class="wrap-anywhere">
                <a href="/2005-BMW-3-Series-3-0-330CD-SPORT-2d-202-BHP-300895568?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1">
                    <strong class="wrap-anywhere">
                        <span class="visible-md-inline visible-sm-inline">2005</span> BMW 3 Series 3.0  330CD  SPORT  2d  202  BHP
                    </strong>
                </a>
            </div>
            <script type="text/javascript">showHeart(300895568, false, false);</script>
        </div>
        <p>
            
        </p>
    </div>
    <div class="car-img">
        
        <a href="/2005-BMW-3-Series-3-0-330CD-SPORT-2d-202-BHP-300895568?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1" title="View the details of this BMW 3 Series 3.0 330CD SPORT 2d 202 BHP in Down" >
            <picture>
                <!--[if IE 9]><video class="hidden"><![endif]-->
                <source srcset="https://image.usedcarsni.com/photos/000/300/895/568/300948345.400.jpg/999999/2x 2x" sizes="100vw" media="(min-width: 760px)" type="image/jpeg" />
                <!--[if IE 9]></video><![endif]-->
                <img class="img-responsive" src="https://image.usedcarsni.com/photos/000/300/895/568/300948345.200.jpg/999999/1x" alt="BMW 3 Series 3.0 330CD SPORT 2d 202 BHP in Down" />
                
                
                
<div class="photo-count-icon-cont 
photo-video-one-icon
 hidden-xss hidden-xs hidden-sm">
    
    
    
<div class="photo-icon 
photo-one-icon
">
<span class="glyphicon glyphicon-camera photo-count-icon"></span>
<div class="photo-count-count">16</div>
</div>

</div>

            </picture>
        </a>
        
        
    </div>
    <div class="car-description">
        <a href="/2005-BMW-3-Series-3-0-330CD-SPORT-2d-202-BHP-300895568?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1"
           class="car-description-overlay-link visible-xss visible-xs visible-sm"
        > </a>
        <div class="car-caption hidden-md">
            <div class="car-title overflowed-flex space-between">
                <div>
                    <a href="/2005-BMW-3-Series-3-0-330CD-SPORT-2d-202-BHP-300895568?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1">
                        <strong class="car-header overflowed">
                            <span class="visible-lg-inline visible-xl-inline">2005</span>
                            BMW 3 Series 3.0  330CD  SPORT  2d  202  BHP
                        </strong>
                    </a>
                </div>
                <div>
                    <script type="text/javascript">showHeart(300895568, false, false);</script>
                </div>
            </div>
            <p>
                
            </p>
        </div>
   <div class="car-short-info hidden-md hidden-lg hidden-xl overflowed">
            <div class="options-small">
            2005,
             </div>
            <div class="options-small">
            128000&nbsp;miles,
             </div>
            <div class="options-small ">
            DIESEL,
             </div>
            <div class="options-small ">
            Automatic,
             </div>
            <div class="options-small load-length-hidden"> </div>
            <div class="options-small load-height-hidden"> </div>
            <div class="options-small payload-hidden"> </div>
            <div class="options-small towing-weight-hidden"> </div>
            <div class="options-small bstyle-hidden">
            Coupe,
             </div>
            <div class="options-small ">
            3.0 L,
             </div>
            <div class="options-small doors-hidden">
            2 Door,
             </div>
            <div class="options-small tax-cost-hidden">
            &pound;360 Tax p.a.,
             </div>
            <div class="options-small">Ballynahinch</div>
            <div></div>
            

            

            

            

            

            

            

            

            

            

            

            

            
            

        </div>
        <div class="car-price car-price-half-container hidden-xss hidden-lg hidden-xl pull-right">
            <div class="car-price-left-block text-left">
                <script type="text/javascript">car_writeSoldTextResp('');</script>
            </div>
            <div class="car-price-right-block text-right hidden-md">
                <strong class="monthly_price_hidden"></strong>
                <p class="retail-price--small monthly_price_hidden">Retail:
                    &pound;3,295</p>
                <div class=""><strong>
&pound;3,295
<div class="euroPrice hidden">3295</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>
</strong></div>
                
                <div class="seller-block">
                    
                
                <!--ul_begin--><img src="https://image.usedcarsni.com/user/000/208/285/525/16285155250e16b74129.svg"  class="img-responsive hq-logo-svg" alt="" /><!--ul_end-->
                
                

                
            
                    
                </div>
            </div>
        </div>
        <div class="visible-xss car-price-half-container pull-right">
            <script type="text/javascript">car_writeSoldTextResp('');</script>
            <strong class="monthly_price_hidden"></strong>
            <p class="retail-price--small monthly_price_hidden">Retail:
                &pound;3,295</p>
            <div class=""><strong>
&pound;3,295
<div class="euroPrice hidden">3295</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>
</strong></div>
            <p class="euro-price--small" ></p>
            
                
                <!--ul_begin--><img src="https://image.usedcarsni.com/user/000/208/285/525/16285155250e16b74129.svg"  class="img-responsive hq-logo-svg" alt="" /><!--ul_end-->
                
                

                
            
            
        </div>
    <div class="hidden-sm hidden-xs hidden-xss pull-left md-car-characteristics">
        <dl class="dl-horizontal other-ads">
            
                <dt>Mileage</dt><dd>128000 Miles</dd>
            
            
                <dt class="">Transmission</dt><dd class="">Automatic</dd>
            
            
                <dt class="">Fuel Type</dt><dd class="">DIESEL</dd>
            
            
            
            
            
            
                <dt class="bstyle-hidden">Body Style</dt><dd class="bstyle-hidden">Coupe</dd>
            
            
                <dt class="">Engine Size</dt><dd class="">3.0 L</dd>
            
            
                <dt class="doors-hidden">Doors</dt><dd class="doors-hidden">2 Door</dd>
            
            
                <dt class="tax-cost-hidden">Standard Tax</dt><dd class="tax-cost-hidden">&pound;360 p.a.</dd>
            
            
            
            
                <dt>Location</dt><dd>Ballynahinch</dd>
            
            
            <dt class="hidden-xl hidden-lg monthly_price_hidden">
                Monthly Cost
            </dt>
            <dd class="hidden-xl hidden-lg monthly_price_hidden">
                
            </dd>
            <dt class="hidden-xl hidden-lg">
                Price
            </dt>
            <dd class="hidden-xl hidden-lg">
                
&pound;3,295
<div class="euroPrice hidden">3295</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>

            </dd>
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            

            
            
            

            

            

            
            
            

            
        </dl>
    </div>

        <div class="price-centered--wider hidden-md hidden-sm hidden-xs hidden-xss">
            <div class="car-price-left-block text-left">
                <script type="text/javascript">car_writeSoldTextResp('');</script>
            </div>
            <p class="monthly-cost-price monthly_price_hidden"></p>
            <div class="retail-price--small monthly_price_hidden">Retail:
                &pound;3,295</div>
            <div class="">
                
&pound;3,295
<div class="euroPrice hidden">3295</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>

            </div>
            
        </div>

        <div class="visible-md visible-lg visible-xl car-seller">
            
                
                <!--ul_begin--><img src="https://image.usedcarsni.com/user/000/208/285/525/16285155250e16b74129.svg"  class="img-responsive hq-logo-svg" alt="" /><!--ul_end-->
                
                

                
            
            
        </div>
    </div>
    
<a href="/2005-BMW-3-Series-3-0-330CD-SPORT-2d-202-BHP-300895568?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1" class="btn more-button btn-warning hidden-sm hidden-xs hidden-xss" role="button">More Details</a>

</article><!-- WARNING: Automated extraction of vehicles is prohibited under the Terms of Use. --><article class="add-half-row overflowed-flex car-line ">
    <div class="car-caption visible-md">
        <div class="car-title overflowed-flex space-between">
            <div class="wrap-anywhere">
                <a href="/2007-BMW-3-Series-330d-SE-4dr-Auto-312472179?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1">
                    <strong class="wrap-anywhere">
                        <span class="visible-md-inline visible-sm-inline">Oct 2007</span> BMW 3 Series 330d  SE  4dr  Auto
                    </strong>
                </a>
            </div>
            <script type="text/javascript">showHeart(312472179, false, false);</script>
        </div>
        <p>
            
<span class="technical-subtitle">
                AUTOMATIC/ MOT' D JANUARY 2024
                </span>

        </p>
    </div>
    <div class="car-img">
        
        <a href="/2007-BMW-3-Series-330d-SE-4dr-Auto-312472179?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1" title="View the details of this BMW 3 Series DIESEL SALOON in Down" >
            <picture>
                <!--[if IE 9]><video class="hidden"><![endif]-->
                <source srcset="https://image.usedcarsni.com/photos/000/312/472/179/312479434.400.jpg/999999/2x 2x" sizes="100vw" media="(min-width: 760px)" type="image/jpeg" />
                <!--[if IE 9]></video><![endif]-->
                <img class="img-responsive" src="https://image.usedcarsni.com/photos/000/312/472/179/312479434.200.jpg/999999/1x" alt="BMW 3 Series DIESEL SALOON in Down" />
                
                
                
<div class="photo-count-icon-cont 
photo-video-one-icon
 hidden-xss hidden-xs hidden-sm">
    
    
    
<div class="photo-icon 
photo-one-icon
">
<span class="glyphicon glyphicon-camera photo-count-icon"></span>
<div class="photo-count-count">19</div>
</div>

</div>

            </picture>
        </a>
        
        
    </div>
    <div class="car-description">
        <a href="/2007-BMW-3-Series-330d-SE-4dr-Auto-312472179?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1"
           class="car-description-overlay-link visible-xss visible-xs visible-sm"
        > </a>
        <div class="car-caption hidden-md">
            <div class="car-title overflowed-flex space-between">
                <div>
                    <a href="/2007-BMW-3-Series-330d-SE-4dr-Auto-312472179?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1">
                        <strong class="car-header overflowed">
                            <span class="visible-lg-inline visible-xl-inline">Oct 2007</span>
                            BMW 3 Series 330d  SE  4dr  Auto
                        </strong>
                    </a>
                </div>
                <div>
                    <script type="text/javascript">showHeart(312472179, false, false);</script>
                </div>
            </div>
            <p>
                
<span class="technical-subtitle">
                AUTOMATIC/ MOT' D JANUARY 2024
                </span>

            </p>
        </div>
   <div class="car-short-info hidden-md hidden-lg hidden-xl overflowed">
            <div class="options-small">
            Oct 2007,
             </div>
            <div class="options-small">
            157000&nbsp;miles,
             </div>
            <div class="options-small ">
            Diesel,
             </div>
            <div class="options-small ">
            Automatic,
             </div>
            <div class="options-small load-length-hidden"> </div>
            <div class="options-small load-height-hidden"> </div>
            <div class="options-small payload-hidden"> </div>
            <div class="options-small towing-weight-hidden"> </div>
            <div class="options-small bstyle-hidden">
            Saloon,
             </div>
            <div class="options-small ">
            3.0 L,
             </div>
            <div class="options-small doors-hidden">
            4 Door,
             </div>
            <div class="options-small tax-cost-hidden"> </div>
            <div class="options-small">Bangor</div>
            <div></div>
            

            

            

            

            

            

            

            

            

            

            

            

            
            

        </div>
        <div class="car-price car-price-half-container hidden-xss hidden-lg hidden-xl pull-right">
            <div class="car-price-left-block text-left">
                <script type="text/javascript">car_writeSoldTextResp('');</script>
            </div>
            <div class="car-price-right-block text-right hidden-md">
                <strong class="monthly_price_hidden"></strong>
                <p class="retail-price--small monthly_price_hidden">Retail:
                    &pound;3,390</p>
                <div class=""><strong>
&pound;3,390
<div class="euroPrice hidden">3390</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>
</strong></div>
                
                <div class="seller-block">
                    
                
                <!--ul_begin--><img src="https://image.usedcarsni.com/user/000/122/008/082/160103683913482e784e.svg"  class="img-responsive hq-logo-svg" alt="" /><!--ul_end-->
                
                

                
            
                    
            <div class="hidden-sm hidden-xs hidden-xss">
              <dt>Dealer Rating</dt>
              <dd>
            <div class="review-stars-new-empty">
              <div class="review-stars-new-whole" style="width: 100%;">
              </div>
            </div>
            </dd>
            </div>
            <div class="hidden-md hidden-lg hidden-xl">
              
            <div class="review-stars-new-empty">
              <div class="review-stars-new-whole" style="width: 100%;">
              </div>
            </div>
            
              <div class="seller-rating-text">Rating</div>
            </div>
            
                </div>
            </div>
        </div>
        <div class="visible-xss car-price-half-container pull-right">
            <script type="text/javascript">car_writeSoldTextResp('');</script>
            <strong class="monthly_price_hidden"></strong>
            <p class="retail-price--small monthly_price_hidden">Retail:
                &pound;3,390</p>
            <div class=""><strong>
&pound;3,390
<div class="euroPrice hidden">3390</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>
</strong></div>
            <p class="euro-price--small" ></p>
            
                
                <!--ul_begin--><img src="https://image.usedcarsni.com/user/000/122/008/082/160103683913482e784e.svg"  class="img-responsive hq-logo-svg" alt="" /><!--ul_end-->
                
                

                
            
            
            <div class="hidden-sm hidden-xs hidden-xss">
              <dt>Dealer Rating</dt>
              <dd>
            <div class="review-stars-new-empty">
              <div class="review-stars-new-whole" style="width: 100%;">
              </div>
            </div>
            </dd>
            </div>
            <div class="hidden-md hidden-lg hidden-xl">
              
            <div class="review-stars-new-empty">
              <div class="review-stars-new-whole" style="width: 100%;">
              </div>
            </div>
            
              <div class="seller-rating-text">Rating</div>
            </div>
            
        </div>
    <div class="hidden-sm hidden-xs hidden-xss pull-left md-car-characteristics">
        <dl class="dl-horizontal other-ads">
            
                <dt>Mileage</dt><dd>157000 Miles</dd>
            
            
                <dt class="">Transmission</dt><dd class="">Automatic</dd>
            
            
                <dt class="">Fuel Type</dt><dd class="">Diesel</dd>
            
            
            
            
            
            
                <dt class="bstyle-hidden">Body Style</dt><dd class="bstyle-hidden">Saloon</dd>
            
            
                <dt class="">Engine Size</dt><dd class="">3.0 L</dd>
            
            
                <dt class="doors-hidden">Doors</dt><dd class="doors-hidden">4 Door</dd>
            
            
            
            
            
                <dt>Location</dt><dd>Bangor</dd>
            
            
            <dt class="hidden-xl hidden-lg monthly_price_hidden">
                Monthly Cost
            </dt>
            <dd class="hidden-xl hidden-lg monthly_price_hidden">
                
            </dd>
            <dt class="hidden-xl hidden-lg">
                Price
            </dt>
            <dd class="hidden-xl hidden-lg">
                
&pound;3,390
<div class="euroPrice hidden">3390</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>

            </dd>
            
            
            
            
            
            <div class="hidden-sm hidden-xs hidden-xss">
              <dt>Dealer Rating</dt>
              <dd>
            <div class="review-stars-new-empty">
              <div class="review-stars-new-whole" style="width: 100%;">
              </div>
            </div>
            </dd>
            </div>
            <div class="hidden-md hidden-lg hidden-xl">
              
            <div class="review-stars-new-empty">
              <div class="review-stars-new-whole" style="width: 100%;">
              </div>
            </div>
            
              <div class="seller-rating-text">Rating</div>
            </div>
            
            
            
            
            
            
            
            
            
            
            
            
            

            
            
            

            

            

            
            
            

            
        </dl>
    </div>

        <div class="price-centered--wider hidden-md hidden-sm hidden-xs hidden-xss">
            <div class="car-price-left-block text-left">
                <script type="text/javascript">car_writeSoldTextResp('');</script>
            </div>
            <p class="monthly-cost-price monthly_price_hidden"></p>
            <div class="retail-price--small monthly_price_hidden">Retail:
                &pound;3,390</div>
            <div class="">
                
&pound;3,390
<div class="euroPrice hidden">3390</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>

            </div>
            
        </div>

        <div class="visible-md visible-lg visible-xl car-seller">
            
                
                <!--ul_begin--><img src="https://image.usedcarsni.com/user/000/122/008/082/160103683913482e784e.svg"  class="img-responsive hq-logo-svg" alt="" /><!--ul_end-->
                
                

                
            
            
        </div>
    </div>
    
<a href="/2007-BMW-3-Series-330d-SE-4dr-Auto-312472179?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1" class="btn more-button btn-warning hidden-sm hidden-xs hidden-xss" role="button">More Details</a>

</article><!-- WARNING: Automated extraction of vehicles is prohibited under the Terms of Use. --><article class="add-half-row overflowed-flex car-line ">
    <div class="car-caption visible-md">
        <div class="car-title overflowed-flex space-between">
            <div class="wrap-anywhere">
                <a href="/2006-BMW-3-Series-330d-M-Sport-4dr-Auto-312683279?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1">
                    <strong class="wrap-anywhere">
                        <span class="visible-md-inline visible-sm-inline">Dec 2006</span> BMW 3 Series 330d  M  Sport  4dr  Auto
                    </strong>
                </a>
            </div>
            <script type="text/javascript">showHeart(312683279, false, false);</script>
        </div>
        <p>
            
        </p>
    </div>
    <div class="car-img">
        
        <a href="/2006-BMW-3-Series-330d-M-Sport-4dr-Auto-312683279?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1" title="View the details of this BMW 3 Series 330d M Sport 4dr Auto in Armagh" >
            <picture>
                <!--[if IE 9]><video class="hidden"><![endif]-->
                <source srcset="https://image.usedcarsni.com/photos/000/312/683/279/312734115.400.jpg/999999/2x 2x" sizes="100vw" media="(min-width: 760px)" type="image/jpeg" />
                <!--[if IE 9]></video><![endif]-->
                <img class="img-responsive" src="https://image.usedcarsni.com/photos/000/312/683/279/312734115.200.jpg/999999/1x" alt="BMW 3 Series 330d M Sport 4dr Auto in Armagh" />
                
                
                
<div class="photo-count-icon-cont 
photo-video-one-icon
 hidden-xss hidden-xs hidden-sm">
    
    
    
<div class="photo-icon 
photo-one-icon
">
<span class="glyphicon glyphicon-camera photo-count-icon"></span>
<div class="photo-count-count">11</div>
</div>

</div>

            </picture>
        </a>
        
        
    </div>
    <div class="car-description">
        <a href="/2006-BMW-3-Series-330d-M-Sport-4dr-Auto-312683279?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1"
           class="car-description-overlay-link visible-xss visible-xs visible-sm"
        > </a>
        <div class="car-caption hidden-md">
            <div class="car-title overflowed-flex space-between">
                <div>
                    <a href="/2006-BMW-3-Series-330d-M-Sport-4dr-Auto-312683279?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1">
                        <strong class="car-header overflowed">
                            <span class="visible-lg-inline visible-xl-inline">Dec 2006</span>
                            BMW 3 Series 330d  M  Sport  4dr  Auto
                        </strong>
                    </a>
                </div>
                <div>
                    <script type="text/javascript">showHeart(312683279, false, false);</script>
                </div>
            </div>
            <p>
                
            </p>
        </div>
   <div class="car-short-info hidden-md hidden-lg hidden-xl overflowed">
            <div class="options-small">
            Dec 2006,
             </div>
            <div class="options-small">
            137000&nbsp;miles,
             </div>
            <div class="options-small ">
            Diesel,
             </div>
            <div class="options-small ">
            Automatic/Other,
             </div>
            <div class="options-small load-length-hidden"> </div>
            <div class="options-small load-height-hidden"> </div>
            <div class="options-small payload-hidden"> </div>
            <div class="options-small towing-weight-hidden"> </div>
            <div class="options-small bstyle-hidden">
            Saloon,
             </div>
            <div class="options-small ">
            3.0 L,
             </div>
            <div class="options-small doors-hidden">
            4 Door,
             </div>
            <div class="options-small tax-cost-hidden">
            &pound;330 Tax p.a.,
             </div>
            <div class="options-small">Armagh</div>
            <div></div>
            

            

            

            

            

            

            

            

            

            

            

            

            
            

        </div>
        <div class="car-price car-price-half-container hidden-xss hidden-lg hidden-xl pull-right">
            <div class="car-price-left-block text-left">
                <script type="text/javascript">car_writeSoldTextResp('');</script>
            </div>
            <div class="car-price-right-block text-right hidden-md">
                <strong class="monthly_price_hidden"></strong>
                <p class="retail-price--small monthly_price_hidden">Retail:
                    &pound;3,450 <span class="priceoptions">O.N.O</span></p>
                <div class=""><strong>
&pound;3,450 <span class="priceoptions">O.N.O</span>
<div class="euroPrice hidden">3450</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>
</strong></div>
                
                <div class="seller-block">
                    
                
                    <div class="seller-info-without-logo">
                        
                        Adrian Oreilly
                    
                    </div>
                    

                    

                    

                    
                
                

                
            
                    
                </div>
            </div>
        </div>
        <div class="visible-xss car-price-half-container pull-right">
            <script type="text/javascript">car_writeSoldTextResp('');</script>
            <strong class="monthly_price_hidden"></strong>
            <p class="retail-price--small monthly_price_hidden">Retail:
                &pound;3,450 <span class="priceoptions">O.N.O</span></p>
            <div class=""><strong>
&pound;3,450 <span class="priceoptions">O.N.O</span>
<div class="euroPrice hidden">3450</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>
</strong></div>
            <p class="euro-price--small" ></p>
            
                
                    <div class="seller-info-without-logo">
                        
                        Adrian Oreilly
                    
                    </div>
                    

                    

                    

                    
                
                

                
            
            
        </div>
    <div class="hidden-sm hidden-xs hidden-xss pull-left md-car-characteristics">
        <dl class="dl-horizontal other-ads">
            
                <dt>Mileage</dt><dd>137000 Miles</dd>
            
            
                <dt class="">Transmission</dt><dd class="">Automatic/Other</dd>
            
            
                <dt class="">Fuel Type</dt><dd class="">Diesel</dd>
            
            
            
            
            
            
                <dt class="bstyle-hidden">Body Style</dt><dd class="bstyle-hidden">Saloon</dd>
            
            
                <dt class="">Engine Size</dt><dd class="">3.0 L</dd>
            
            
                <dt class="doors-hidden">Doors</dt><dd class="doors-hidden">4 Door</dd>
            
            
                <dt class="tax-cost-hidden">Standard Tax</dt><dd class="tax-cost-hidden">&pound;330 p.a.</dd>
            
            
            
            
                <dt>Location</dt><dd>Armagh</dd>
            
            
            <dt class="hidden-xl hidden-lg monthly_price_hidden">
                Monthly Cost
            </dt>
            <dd class="hidden-xl hidden-lg monthly_price_hidden">
                
            </dd>
            <dt class="hidden-xl hidden-lg">
                Price
            </dt>
            <dd class="hidden-xl hidden-lg">
                
&pound;3,450 <span class="priceoptions">O.N.O</span>
<div class="euroPrice hidden">3450</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>

            </dd>
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            

            
            
            

            

            

            
            
            

            
        </dl>
    </div>

        <div class="price-centered--wider hidden-md hidden-sm hidden-xs hidden-xss">
            <div class="car-price-left-block text-left">
                <script type="text/javascript">car_writeSoldTextResp('');</script>
            </div>
            <p class="monthly-cost-price monthly_price_hidden"></p>
            <div class="retail-price--small monthly_price_hidden">Retail:
                &pound;3,450 <span class="priceoptions">O.N.O</span></div>
            <div class="">
                
&pound;3,450 <span class="priceoptions">O.N.O</span>
<div class="euroPrice hidden">3450</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>

            </div>
            
        </div>

        <div class="visible-md visible-lg visible-xl car-seller">
            
                
                    <div class="seller-info-without-logo">
                        
                        Adrian Oreilly
                    
                    </div>
                    

                    

                    

                    
                
                

                
            
            
        </div>
    </div>
    
<a href="/2006-BMW-3-Series-330d-M-Sport-4dr-Auto-312683279?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1" class="btn more-button btn-warning hidden-sm hidden-xs hidden-xss" role="button">More Details</a>

</article><!-- WARNING: Automated extraction of vehicles is prohibited under the Terms of Use. --><article class="add-half-row overflowed-flex car-line ">
    <div class="car-caption visible-md">
        <div class="car-title overflowed-flex space-between">
            <div class="wrap-anywhere">
                <a href="/2010-BMW-3-Series-320d-184-M-Sport-4dr-312065966?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1">
                    <strong class="wrap-anywhere">
                        <span class="visible-md-inline visible-sm-inline">May 2010</span> BMW 3 Series 320d  [184]  M  Sport  4dr
                    </strong>
                </a>
            </div>
            <script type="text/javascript">showHeart(312065966, false, false);</script>
        </div>
        <p>
            
<span class="technical-subtitle">
                320d msport
                </span>

        </p>
    </div>
    <div class="car-img">
        
        <a href="/2010-BMW-3-Series-320d-184-M-Sport-4dr-312065966?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1" title="View the details of this BMW 3 Series 320d [184] M Sport 4dr in Fermanagh" >
            <picture>
                <!--[if IE 9]><video class="hidden"><![endif]-->
                <source srcset="https://image.usedcarsni.com/photos/000/312/065/966/312066232.400.jpg/999999/2x 2x" sizes="100vw" media="(min-width: 760px)" type="image/jpeg" />
                <!--[if IE 9]></video><![endif]-->
                <img class="img-responsive" src="https://image.usedcarsni.com/photos/000/312/065/966/312066232.200.jpg/999999/1x" alt="BMW 3 Series 320d [184] M Sport 4dr in Fermanagh" />
                
                
                
<div class="photo-count-icon-cont 
photo-video-one-icon
 hidden-xss hidden-xs hidden-sm">
    
    
    
<div class="photo-icon 
photo-one-icon
">
<span class="glyphicon glyphicon-camera photo-count-icon"></span>
<div class="photo-count-count">10</div>
</div>

</div>

            </picture>
        </a>
        
        
    </div>
    <div class="car-description">
        <a href="/2010-BMW-3-Series-320d-184-M-Sport-4dr-312065966?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1"
           class="car-description-overlay-link visible-xss visible-xs visible-sm"
        > </a>
        <div class="car-caption hidden-md">
            <div class="car-title overflowed-flex space-between">
                <div>
                    <a href="/2010-BMW-3-Series-320d-184-M-Sport-4dr-312065966?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1">
                        <strong class="car-header overflowed">
                            <span class="visible-lg-inline visible-xl-inline">May 2010</span>
                            BMW 3 Series 320d  [184]  M  Sport  4dr
                        </strong>
                    </a>
                </div>
                <div>
                    <script type="text/javascript">showHeart(312065966, false, false);</script>
                </div>
            </div>
            <p>
                
<span class="technical-subtitle">
                320d msport
                </span>

            </p>
        </div>
   <div class="car-short-info hidden-md hidden-lg hidden-xl overflowed">
            <div class="options-small">
            May 2010,
             </div>
            <div class="options-small">
            93500&nbsp;miles,
             </div>
            <div class="options-small ">
            Diesel,
             </div>
            <div class="options-small ">
            Manual,
             </div>
            <div class="options-small load-length-hidden"> </div>
            <div class="options-small load-height-hidden"> </div>
            <div class="options-small payload-hidden"> </div>
            <div class="options-small towing-weight-hidden"> </div>
            <div class="options-small bstyle-hidden">
            Saloon,
             </div>
            <div class="options-small ">
            2.0 L,
             </div>
            <div class="options-small doors-hidden">
            4 Door,
             </div>
            <div class="options-small tax-cost-hidden">
            &pound;135 Tax p.a.,
             </div>
            <div class="options-small">County Fermanagh</div>
            <div></div>
            

            

            

            

            

            

            

            

            

            

            

            

            
            

        </div>
        <div class="car-price car-price-half-container hidden-xss hidden-lg hidden-xl pull-right">
            <div class="car-price-left-block text-left">
                <script type="text/javascript">car_writeSoldTextResp('');</script>
            </div>
            <div class="car-price-right-block text-right hidden-md">
                <strong class="monthly_price_hidden"></strong>
                <p class="retail-price--small monthly_price_hidden">Retail:
                    &pound;3,950 <span class="priceoptions">O.N.O</span></p>
                <div class=""><strong>
&pound;3,950 <span class="priceoptions">O.N.O</span>
<div class="euroPrice hidden">3950</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>
</strong></div>
                
                <div class="seller-block">
                    
                
                    <div class="seller-info-without-logo">
                        
                        Private Seller
                    
                    </div>
                    

                    

                    

                    
                
                

                
            
                    
                </div>
            </div>
        </div>
        <div class="visible-xss car-price-half-container pull-right">
            <script type="text/javascript">car_writeSoldTextResp('');</script>
            <strong class="monthly_price_hidden"></strong>
            <p class="retail-price--small monthly_price_hidden">Retail:
                &pound;3,950 <span class="priceoptions">O.N.O</span></p>
            <div class=""><strong>
&pound;3,950 <span class="priceoptions">O.N.O</span>
<div class="euroPrice hidden">3950</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>
</strong></div>
            <p class="euro-price--small" ></p>
            
                
                    <div class="seller-info-without-logo">
                        
                        Private Seller
                    
                    </div>
                    

                    

                    

                    
                
                

                
            
            
        </div>
    <div class="hidden-sm hidden-xs hidden-xss pull-left md-car-characteristics">
        <dl class="dl-horizontal other-ads">
            
                <dt>Mileage</dt><dd>93500 Miles</dd>
            
            
                <dt class="">Transmission</dt><dd class="">Manual</dd>
            
            
                <dt class="">Fuel Type</dt><dd class="">Diesel</dd>
            
            
            
            
            
            
                <dt class="bstyle-hidden">Body Style</dt><dd class="bstyle-hidden">Saloon</dd>
            
            
                <dt class="">Engine Size</dt><dd class="">2.0 L</dd>
            
            
                <dt class="doors-hidden">Doors</dt><dd class="doors-hidden">4 Door</dd>
            
            
                <dt class="tax-cost-hidden">Standard Tax</dt><dd class="tax-cost-hidden">&pound;135 p.a.</dd>
            
            
            
            
                <dt>Location</dt><dd>County Fermanagh</dd>
            
            
            <dt class="hidden-xl hidden-lg monthly_price_hidden">
                Monthly Cost
            </dt>
            <dd class="hidden-xl hidden-lg monthly_price_hidden">
                
            </dd>
            <dt class="hidden-xl hidden-lg">
                Price
            </dt>
            <dd class="hidden-xl hidden-lg">
                
&pound;3,950 <span class="priceoptions">O.N.O</span>
<div class="euroPrice hidden">3950</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>

            </dd>
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            

            
            
            

            

            

            
            
            

            
        </dl>
    </div>

        <div class="price-centered--wider hidden-md hidden-sm hidden-xs hidden-xss">
            <div class="car-price-left-block text-left">
                <script type="text/javascript">car_writeSoldTextResp('');</script>
            </div>
            <p class="monthly-cost-price monthly_price_hidden"></p>
            <div class="retail-price--small monthly_price_hidden">Retail:
                &pound;3,950 <span class="priceoptions">O.N.O</span></div>
            <div class="">
                
&pound;3,950 <span class="priceoptions">O.N.O</span>
<div class="euroPrice hidden">3950</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>

            </div>
            
        </div>

        <div class="visible-md visible-lg visible-xl car-seller">
            
                
                    <div class="seller-info-without-logo">
                        
                        Private Seller
                    
                    </div>
                    

                    

                    

                    
                
                

                
            
            
        </div>
    </div>
    
<a href="/2010-BMW-3-Series-320d-184-M-Sport-4dr-312065966?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1" class="btn more-button btn-warning hidden-sm hidden-xs hidden-xss" role="button">More Details</a>

</article><!-- WARNING: Automated extraction of vehicles is prohibited under the Terms of Use. --><article class="add-half-row overflowed-flex car-line ">
    <div class="car-caption visible-md">
        <div class="car-title overflowed-flex space-between">
            <div class="wrap-anywhere">
                <a href="/2008-BMW-3-Series-318i-SE-4dr-296095324?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1">
                    <strong class="wrap-anywhere">
                        <span class="visible-md-inline visible-sm-inline">Jan 2008</span> BMW 3 Series 318i  SE  4dr
                    </strong>
                </a>
            </div>
            <script type="text/javascript">showHeart(296095324, false, false);</script>
        </div>
        <p>
            
<span class="technical-subtitle">
                LONG MOT, GREAT DRIVING CAR
                </span>

        </p>
    </div>
    <div class="car-img">
        
        <a href="/2008-BMW-3-Series-318i-SE-4dr-296095324?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1" title="View the details of this BMW 3 Series SALOON in Down" >
            <picture>
                <!--[if IE 9]><video class="hidden"><![endif]-->
                <source srcset="https://image.usedcarsni.com/photos/000/296/095/324/296095333.400.jpg/999999/2x 2x" sizes="100vw" media="(min-width: 760px)" type="image/jpeg" />
                <!--[if IE 9]></video><![endif]-->
                <img class="img-responsive" src="https://image.usedcarsni.com/photos/000/296/095/324/296095333.200.jpg/999999/1x" alt="BMW 3 Series SALOON in Down" />
                
                
                
<div class="photo-count-icon-cont 
photo-video-one-icon
 hidden-xss hidden-xs hidden-sm">
    
    
    
<div class="photo-icon 
photo-one-icon
">
<span class="glyphicon glyphicon-camera photo-count-icon"></span>
<div class="photo-count-count">35</div>
</div>

</div>

            </picture>
        </a>
        
        
    </div>
    <div class="car-description">
        <a href="/2008-BMW-3-Series-318i-SE-4dr-296095324?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1"
           class="car-description-overlay-link visible-xss visible-xs visible-sm"
        > </a>
        <div class="car-caption hidden-md">
            <div class="car-title overflowed-flex space-between">
                <div>
                    <a href="/2008-BMW-3-Series-318i-SE-4dr-296095324?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1">
                        <strong class="car-header overflowed">
                            <span class="visible-lg-inline visible-xl-inline">Jan 2008</span>
                            BMW 3 Series 318i  SE  4dr
                        </strong>
                    </a>
                </div>
                <div>
                    <script type="text/javascript">showHeart(296095324, false, false);</script>
                </div>
            </div>
            <p>
                
<span class="technical-subtitle">
                LONG MOT, GREAT DRIVING CAR
                </span>

            </p>
        </div>
   <div class="car-short-info hidden-md hidden-lg hidden-xl overflowed">
            <div class="options-small">
            Jan 2008,
             </div>
            <div class="options-small">
            101000&nbsp;miles,
             </div>
            <div class="options-small ">
            Petrol,
             </div>
            <div class="options-small ">
            Manual,
             </div>
            <div class="options-small load-length-hidden"> </div>
            <div class="options-small load-height-hidden"> </div>
            <div class="options-small payload-hidden"> </div>
            <div class="options-small towing-weight-hidden"> </div>
            <div class="options-small bstyle-hidden">
            Saloon,
             </div>
            <div class="options-small ">
            2.0 L,
             </div>
            <div class="options-small doors-hidden">
            4 Door,
             </div>
            <div class="options-small tax-cost-hidden">
            &pound;265 Tax p.a.,
             </div>
            <div class="options-small">Belfast</div>
            <div></div>
            

            

            

            

            

            

            

            

            

            

            

            

            
            

        </div>
        <div class="car-price car-price-half-container hidden-xss hidden-lg hidden-xl pull-right">
            <div class="car-price-left-block text-left">
                <script type="text/javascript">car_writeSoldTextResp('');</script>
            </div>
            <div class="car-price-right-block text-right hidden-md">
                <strong class="monthly_price_hidden"></strong>
                <p class="retail-price--small monthly_price_hidden">Retail:
                    &pound;3,995</p>
                <div class=""><strong>
&pound;3,995
<div class="euroPrice hidden">3995</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>
</strong></div>
                
                <div class="seller-block">
                    
                
                <!--ul_begin--><img src="https://image.usedcarsni.com/user/000/154/297/629/16171867438bb89255eb.svg"  class="img-responsive hq-logo-svg" alt="" /><!--ul_end-->
                
                

                
            
                    
                </div>
            </div>
        </div>
        <div class="visible-xss car-price-half-container pull-right">
            <script type="text/javascript">car_writeSoldTextResp('');</script>
            <strong class="monthly_price_hidden"></strong>
            <p class="retail-price--small monthly_price_hidden">Retail:
                &pound;3,995</p>
            <div class=""><strong>
&pound;3,995
<div class="euroPrice hidden">3995</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>
</strong></div>
            <p class="euro-price--small" ></p>
            
                
                <!--ul_begin--><img src="https://image.usedcarsni.com/user/000/154/297/629/16171867438bb89255eb.svg"  class="img-responsive hq-logo-svg" alt="" /><!--ul_end-->
                
                

                
            
            
        </div>
    <div class="hidden-sm hidden-xs hidden-xss pull-left md-car-characteristics">
        <dl class="dl-horizontal other-ads">
            
                <dt>Mileage</dt><dd>101000 Miles</dd>
            
            
                <dt class="">Transmission</dt><dd class="">Manual</dd>
            
            
                <dt class="">Fuel Type</dt><dd class="">Petrol</dd>
            
            
            
            
            
            
                <dt class="bstyle-hidden">Body Style</dt><dd class="bstyle-hidden">Saloon</dd>
            
            
                <dt class="">Engine Size</dt><dd class="">2.0 L</dd>
            
            
                <dt class="doors-hidden">Doors</dt><dd class="doors-hidden">4 Door</dd>
            
            
                <dt class="tax-cost-hidden">Standard Tax</dt><dd class="tax-cost-hidden">&pound;265 p.a.</dd>
            
            
            
            
                <dt>Location</dt><dd>Belfast</dd>
            
            
            <dt class="hidden-xl hidden-lg monthly_price_hidden">
                Monthly Cost
            </dt>
            <dd class="hidden-xl hidden-lg monthly_price_hidden">
                
            </dd>
            <dt class="hidden-xl hidden-lg">
                Price
            </dt>
            <dd class="hidden-xl hidden-lg">
                
&pound;3,995
<div class="euroPrice hidden">3995</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>

            </dd>
            
            
            
                <dt>Warranty</dt><dd>3 months</dd>
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            

            
            
            

            

            

            
            
            

            
        </dl>
    </div>

        <div class="price-centered--wider hidden-md hidden-sm hidden-xs hidden-xss">
            <div class="car-price-left-block text-left">
                <script type="text/javascript">car_writeSoldTextResp('');</script>
            </div>
            <p class="monthly-cost-price monthly_price_hidden"></p>
            <div class="retail-price--small monthly_price_hidden">Retail:
                &pound;3,995</div>
            <div class="">
                
&pound;3,995
<div class="euroPrice hidden">3995</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>

            </div>
            
        </div>

        <div class="visible-md visible-lg visible-xl car-seller">
            
                
                <!--ul_begin--><img src="https://image.usedcarsni.com/user/000/154/297/629/16171867438bb89255eb.svg"  class="img-responsive hq-logo-svg" alt="" /><!--ul_end-->
                
                

                
            
            
        </div>
    </div>
    
<a href="/2008-BMW-3-Series-318i-SE-4dr-296095324?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1" class="btn more-button btn-warning hidden-sm hidden-xs hidden-xss" role="button">More Details</a>

</article><!-- WARNING: Automated extraction of vehicles is prohibited under the Terms of Use. --><article class="add-half-row overflowed-flex car-line ">
    <div class="car-caption visible-md">
        <div class="car-title overflowed-flex space-between">
            <div class="wrap-anywhere">
                <a href="/2009-BMW-3-Series-318d-SE-Business-Edition-5dr-308976469?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1">
                    <strong class="wrap-anywhere">
                        <span class="visible-md-inline visible-sm-inline">Oct 2009</span> BMW 3 Series 318d  SE  Business  Edition  5dr
                    </strong>
                </a>
            </div>
            <script type="text/javascript">showHeart(308976469, false, false);</script>
        </div>
        <p>
            
<span class="technical-subtitle">
                FINANCE AVAILABLE
                </span>

        </p>
    </div>
    <div class="car-img">
        
        <a href="/2009-BMW-3-Series-318d-SE-Business-Edition-5dr-308976469?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1" title="View the details of this BMW 3 Series DIESEL TOURING in Derry / Londonderry" >
            <picture>
                <!--[if IE 9]><video class="hidden"><![endif]-->
                <source srcset="https://image.usedcarsni.com/photos/000/308/976/469/309451874.400.jpg/999999/2x 2x" sizes="100vw" media="(min-width: 760px)" type="image/jpeg" />
                <!--[if IE 9]></video><![endif]-->
                <img class="img-responsive" src="https://image.usedcarsni.com/photos/000/308/976/469/309451874.200.jpg/999999/1x" alt="BMW 3 Series DIESEL TOURING in Derry / Londonderry" />
                
                
                
<div class="photo-count-icon-cont 
photo-video-one-icon
 hidden-xss hidden-xs hidden-sm">
    
    
    
<div class="photo-icon 
photo-one-icon
">
<span class="glyphicon glyphicon-camera photo-count-icon"></span>
<div class="photo-count-count">11</div>
</div>

</div>

            </picture>
        </a>
        
        
    </div>
    <div class="car-description">
        <a href="/2009-BMW-3-Series-318d-SE-Business-Edition-5dr-308976469?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1"
           class="car-description-overlay-link visible-xss visible-xs visible-sm"
        > </a>
        <div class="car-caption hidden-md">
            <div class="car-title overflowed-flex space-between">
                <div>
                    <a href="/2009-BMW-3-Series-318d-SE-Business-Edition-5dr-308976469?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1">
                        <strong class="car-header overflowed">
                            <span class="visible-lg-inline visible-xl-inline">Oct 2009</span>
                            BMW 3 Series 318d  SE  Business  Edition  5dr
                        </strong>
                    </a>
                </div>
                <div>
                    <script type="text/javascript">showHeart(308976469, false, false);</script>
                </div>
            </div>
            <p>
                
<span class="technical-subtitle">
                FINANCE AVAILABLE
                </span>

            </p>
        </div>
   <div class="car-short-info hidden-md hidden-lg hidden-xl overflowed">
            <div class="options-small">
            Oct 2009,
             </div>
            <div class="options-small">
            134000&nbsp;miles,
             </div>
            <div class="options-small ">
            Diesel,
             </div>
            <div class="options-small ">
            Manual,
             </div>
            <div class="options-small load-length-hidden"> </div>
            <div class="options-small load-height-hidden"> </div>
            <div class="options-small payload-hidden"> </div>
            <div class="options-small towing-weight-hidden"> </div>
            <div class="options-small bstyle-hidden">
            Estate,
             </div>
            <div class="options-small ">
            2.0 L,
             </div>
            <div class="options-small doors-hidden">
            5 Door,
             </div>
            <div class="options-small tax-cost-hidden">
            &pound;135 Tax p.a.,
             </div>
            <div class="options-small">Coleraine</div>
            <div></div>
            

            

            

            

            

            

            

            

            

            

            

            

            
            

        </div>
        <div class="car-price car-price-half-container hidden-xss hidden-lg hidden-xl pull-right">
            <div class="car-price-left-block text-left">
                <script type="text/javascript">car_writeSoldTextResp('');</script>
            </div>
            <div class="car-price-right-block text-right hidden-md">
                <strong class="monthly_price_hidden"></strong>
                <p class="retail-price--small monthly_price_hidden">Retail:
                    &pound;4,995</p>
                <div class=""><strong>
&pound;4,995
<div class="euroPrice hidden">4995</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>
</strong></div>
                
                <div class="seller-block">
                    
                
                <!--ul_begin--><img src="https://image.usedcarsni.com/user/000/247/328/242/16010365131781ae5a2a.svg"  class="img-responsive hq-logo-svg" alt="" /><!--ul_end-->
                
                

                
            
                    
                </div>
            </div>
        </div>
        <div class="visible-xss car-price-half-container pull-right">
            <script type="text/javascript">car_writeSoldTextResp('');</script>
            <strong class="monthly_price_hidden"></strong>
            <p class="retail-price--small monthly_price_hidden">Retail:
                &pound;4,995</p>
            <div class=""><strong>
&pound;4,995
<div class="euroPrice hidden">4995</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>
</strong></div>
            <p class="euro-price--small" ></p>
            
                
                <!--ul_begin--><img src="https://image.usedcarsni.com/user/000/247/328/242/16010365131781ae5a2a.svg"  class="img-responsive hq-logo-svg" alt="" /><!--ul_end-->
                
                

                
            
            
        </div>
    <div class="hidden-sm hidden-xs hidden-xss pull-left md-car-characteristics">
        <dl class="dl-horizontal other-ads">
            
                <dt>Mileage</dt><dd>134000 Miles</dd>
            
            
                <dt class="">Transmission</dt><dd class="">Manual</dd>
            
            
                <dt class="">Fuel Type</dt><dd class="">Diesel</dd>
            
            
            
            
            
            
                <dt class="bstyle-hidden">Body Style</dt><dd class="bstyle-hidden">Estate</dd>
            
            
                <dt class="">Engine Size</dt><dd class="">2.0 L</dd>
            
            
                <dt class="doors-hidden">Doors</dt><dd class="doors-hidden">5 Door</dd>
            
            
                <dt class="tax-cost-hidden">Standard Tax</dt><dd class="tax-cost-hidden">&pound;135 p.a.</dd>
            
            
            
            
                <dt>Location</dt><dd>Coleraine</dd>
            
            
            <dt class="hidden-xl hidden-lg monthly_price_hidden">
                Monthly Cost
            </dt>
            <dd class="hidden-xl hidden-lg monthly_price_hidden">
                
            </dd>
            <dt class="hidden-xl hidden-lg">
                Price
            </dt>
            <dd class="hidden-xl hidden-lg">
                
&pound;4,995
<div class="euroPrice hidden">4995</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>

            </dd>
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            

            
            
            

            

            

            
            
            

            
        </dl>
    </div>

        <div class="price-centered--wider hidden-md hidden-sm hidden-xs hidden-xss">
            <div class="car-price-left-block text-left">
                <script type="text/javascript">car_writeSoldTextResp('');</script>
            </div>
            <p class="monthly-cost-price monthly_price_hidden"></p>
            <div class="retail-price--small monthly_price_hidden">Retail:
                &pound;4,995</div>
            <div class="">
                
&pound;4,995
<div class="euroPrice hidden">4995</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>

            </div>
            
        </div>

        <div class="visible-md visible-lg visible-xl car-seller">
            
                
                <!--ul_begin--><img src="https://image.usedcarsni.com/user/000/247/328/242/16010365131781ae5a2a.svg"  class="img-responsive hq-logo-svg" alt="" /><!--ul_end-->
                
                

                
            
            
        </div>
    </div>
    
<a href="/2009-BMW-3-Series-318d-SE-Business-Edition-5dr-308976469?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1" class="btn more-button btn-warning hidden-sm hidden-xs hidden-xss" role="button">More Details</a>

</article><!-- WARNING: Automated extraction of vehicles is prohibited under the Terms of Use. --><article class="add-half-row overflowed-flex car-line ">
    <div class="car-caption visible-md">
        <div class="car-title overflowed-flex space-between">
            <div class="wrap-anywhere">
                <a href="/2009-BMW-3-Series-318d-M-Sport-4dr-Step-Auto-309107870?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1">
                    <strong class="wrap-anywhere">
                        <span class="visible-md-inline visible-sm-inline">2009</span> BMW 3 Series 318d  M  Sport  4dr  Step  Auto
                    </strong>
                </a>
            </div>
            <script type="text/javascript">showHeart(309107870, false, false);</script>
        </div>
        <p>
            
<span class="technical-subtitle">
                Finance Available! Full Service History! Full Mot!
                </span>

        </p>
    </div>
    <div class="car-img">
        
        <a href="/2009-BMW-3-Series-318d-M-Sport-4dr-Step-Auto-309107870?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1" title="View the details of this BMW 3 Series DIESEL SALOON in Down" >
            <picture>
                <!--[if IE 9]><video class="hidden"><![endif]-->
                <source srcset="https://image.usedcarsni.com/photos/000/309/107/870/309109024.400.jpg/999999/2x 2x" sizes="100vw" media="(min-width: 760px)" type="image/jpeg" />
                <!--[if IE 9]></video><![endif]-->
                <img class="img-responsive" src="https://image.usedcarsni.com/photos/000/309/107/870/309109024.200.jpg/999999/1x" alt="BMW 3 Series DIESEL SALOON in Down" />
                
                
                
<div class="photo-count-icon-cont 
photo-video-one-icon
 hidden-xss hidden-xs hidden-sm">
    
    
    
<div class="photo-icon 
photo-one-icon
">
<span class="glyphicon glyphicon-camera photo-count-icon"></span>
<div class="photo-count-count">9</div>
</div>

</div>

            </picture>
        </a>
        
        
    </div>
    <div class="car-description">
        <a href="/2009-BMW-3-Series-318d-M-Sport-4dr-Step-Auto-309107870?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1"
           class="car-description-overlay-link visible-xss visible-xs visible-sm"
        > </a>
        <div class="car-caption hidden-md">
            <div class="car-title overflowed-flex space-between">
                <div>
                    <a href="/2009-BMW-3-Series-318d-M-Sport-4dr-Step-Auto-309107870?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1">
                        <strong class="car-header overflowed">
                            <span class="visible-lg-inline visible-xl-inline">2009</span>
                            BMW 3 Series 318d  M  Sport  4dr  Step  Auto
                        </strong>
                    </a>
                </div>
                <div>
                    <script type="text/javascript">showHeart(309107870, false, false);</script>
                </div>
            </div>
            <p>
                
<span class="technical-subtitle">
                Finance Available! Full Service History! Full Mot!
                </span>

            </p>
        </div>
   <div class="car-short-info hidden-md hidden-lg hidden-xl overflowed">
            <div class="options-small">
            2009,
             </div>
            <div class="options-small">
            119000&nbsp;miles,
             </div>
            <div class="options-small ">
            Diesel,
             </div>
            <div class="options-small ">
            Semi-Automatic,
             </div>
            <div class="options-small load-length-hidden"> </div>
            <div class="options-small load-height-hidden"> </div>
            <div class="options-small payload-hidden"> </div>
            <div class="options-small towing-weight-hidden"> </div>
            <div class="options-small bstyle-hidden">
            Saloon,
             </div>
            <div class="options-small ">
            2.0 L,
             </div>
            <div class="options-small doors-hidden">
            4 Door,
             </div>
            <div class="options-small tax-cost-hidden">
            &pound;180 Tax p.a.,
             </div>
            <div class="options-small">Rathfriland</div>
            <div></div>
            

            

            

            

            

            

            

            

            

            

            

            

            
            

        </div>
        <div class="car-price car-price-half-container hidden-xss hidden-lg hidden-xl pull-right">
            <div class="car-price-left-block text-left">
                <script type="text/javascript">car_writeSoldTextResp('');</script>
            </div>
            <div class="car-price-right-block text-right hidden-md">
                <strong class="monthly_price_hidden"></strong>
                <p class="retail-price--small monthly_price_hidden">Retail:
                    &pound;4,995</p>
                <div class=""><strong>
&pound;4,995
<div class="euroPrice hidden">4995</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>
</strong></div>
                
                <div class="seller-block">
                    
                
                <!--ul_begin--><img src="https://image.usedcarsni.com/user/000/227/529/647/1622640738a3960762f0.svg"  class="img-responsive hq-logo-svg" alt="" /><!--ul_end-->
                
                

                
            
                    
                </div>
            </div>
        </div>
        <div class="visible-xss car-price-half-container pull-right">
            <script type="text/javascript">car_writeSoldTextResp('');</script>
            <strong class="monthly_price_hidden"></strong>
            <p class="retail-price--small monthly_price_hidden">Retail:
                &pound;4,995</p>
            <div class=""><strong>
&pound;4,995
<div class="euroPrice hidden">4995</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>
</strong></div>
            <p class="euro-price--small" ></p>
            
                
                <!--ul_begin--><img src="https://image.usedcarsni.com/user/000/227/529/647/1622640738a3960762f0.svg"  class="img-responsive hq-logo-svg" alt="" /><!--ul_end-->
                
                

                
            
            
        </div>
    <div class="hidden-sm hidden-xs hidden-xss pull-left md-car-characteristics">
        <dl class="dl-horizontal other-ads">
            
                <dt>Mileage</dt><dd>119000 Miles</dd>
            
            
                <dt class="">Transmission</dt><dd class="">Semi-Automatic</dd>
            
            
                <dt class="">Fuel Type</dt><dd class="">Diesel</dd>
            
            
            
            
            
            
                <dt class="bstyle-hidden">Body Style</dt><dd class="bstyle-hidden">Saloon</dd>
            
            
                <dt class="">Engine Size</dt><dd class="">2.0 L</dd>
            
            
                <dt class="doors-hidden">Doors</dt><dd class="doors-hidden">4 Door</dd>
            
            
                <dt class="tax-cost-hidden">Standard Tax</dt><dd class="tax-cost-hidden">&pound;180 p.a.</dd>
            
            
            
            
                <dt>Location</dt><dd>Rathfriland</dd>
            
            
            <dt class="hidden-xl hidden-lg monthly_price_hidden">
                Monthly Cost
            </dt>
            <dd class="hidden-xl hidden-lg monthly_price_hidden">
                
            </dd>
            <dt class="hidden-xl hidden-lg">
                Price
            </dt>
            <dd class="hidden-xl hidden-lg">
                
&pound;4,995
<div class="euroPrice hidden">4995</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>

            </dd>
            
            
            
                <dt>Warranty</dt><dd>3 months</dd>
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            

            
            
            

            

            

            
            
            

            
        </dl>
    </div>

        <div class="price-centered--wider hidden-md hidden-sm hidden-xs hidden-xss">
            <div class="car-price-left-block text-left">
                <script type="text/javascript">car_writeSoldTextResp('');</script>
            </div>
            <p class="monthly-cost-price monthly_price_hidden"></p>
            <div class="retail-price--small monthly_price_hidden">Retail:
                &pound;4,995</div>
            <div class="">
                
&pound;4,995
<div class="euroPrice hidden">4995</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>

            </div>
            
        </div>

        <div class="visible-md visible-lg visible-xl car-seller">
            
                
                <!--ul_begin--><img src="https://image.usedcarsni.com/user/000/227/529/647/1622640738a3960762f0.svg"  class="img-responsive hq-logo-svg" alt="" /><!--ul_end-->
                
                

                
            
            
        </div>
    </div>
    
<a href="/2009-BMW-3-Series-318d-M-Sport-4dr-Step-Auto-309107870?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1" class="btn more-button btn-warning hidden-sm hidden-xs hidden-xss" role="button">More Details</a>

</article><!-- WARNING: Automated extraction of vehicles is prohibited under the Terms of Use. --><article class="add-half-row overflowed-flex car-line ">
    <div class="car-caption visible-md">
        <div class="car-title overflowed-flex space-between">
            <div class="wrap-anywhere">
                <a href="/2010-BMW-3-Series-318d-M-Sport-4dr-Step-Auto-312400834?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1">
                    <strong class="wrap-anywhere">
                        <span class="visible-md-inline visible-sm-inline">Feb 2010</span> BMW 3 Series 318d  M  Sport  4dr  Step  Auto
                    </strong>
                </a>
            </div>
            <script type="text/javascript">showHeart(312400834, false, false);</script>
        </div>
        <p>
            
<span class="technical-subtitle">
                MOT' d to Dec 2023
                </span>

        </p>
    </div>
    <div class="car-img">
        
        <a href="/2010-BMW-3-Series-318d-M-Sport-4dr-Step-Auto-312400834?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1" title="View the details of this BMW 3 Series 318d M Sport 4dr Step Auto in Armagh" >
            <picture>
                <!--[if IE 9]><video class="hidden"><![endif]-->
                <source srcset="https://image.usedcarsni.com/photos/000/312/400/834/312400849.400.jpg/999999/2x 2x" sizes="100vw" media="(min-width: 760px)" type="image/jpeg" />
                <!--[if IE 9]></video><![endif]-->
                <img class="img-responsive" src="https://image.usedcarsni.com/photos/000/312/400/834/312400849.200.jpg/999999/1x" alt="BMW 3 Series 318d M Sport 4dr Step Auto in Armagh" />
                
                
                
<div class="photo-count-icon-cont 
photo-video-one-icon
 hidden-xss hidden-xs hidden-sm">
    
    
    
<div class="photo-icon 
photo-one-icon
">
<span class="glyphicon glyphicon-camera photo-count-icon"></span>
<div class="photo-count-count">8</div>
</div>

</div>

            </picture>
        </a>
        
        
    </div>
    <div class="car-description">
        <a href="/2010-BMW-3-Series-318d-M-Sport-4dr-Step-Auto-312400834?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1"
           class="car-description-overlay-link visible-xss visible-xs visible-sm"
        > </a>
        <div class="car-caption hidden-md">
            <div class="car-title overflowed-flex space-between">
                <div>
                    <a href="/2010-BMW-3-Series-318d-M-Sport-4dr-Step-Auto-312400834?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1">
                        <strong class="car-header overflowed">
                            <span class="visible-lg-inline visible-xl-inline">Feb 2010</span>
                            BMW 3 Series 318d  M  Sport  4dr  Step  Auto
                        </strong>
                    </a>
                </div>
                <div>
                    <script type="text/javascript">showHeart(312400834, false, false);</script>
                </div>
            </div>
            <p>
                
<span class="technical-subtitle">
                MOT' d to Dec 2023
                </span>

            </p>
        </div>
   <div class="car-short-info hidden-md hidden-lg hidden-xl overflowed">
            <div class="options-small">
            Feb 2010,
             </div>
            <div class="options-small">
            111000&nbsp;miles,
             </div>
            <div class="options-small ">
            Diesel,
             </div>
            <div class="options-small ">
            Automatic/Other,
             </div>
            <div class="options-small load-length-hidden"> </div>
            <div class="options-small load-height-hidden"> </div>
            <div class="options-small payload-hidden"> </div>
            <div class="options-small towing-weight-hidden"> </div>
            <div class="options-small bstyle-hidden">
            Saloon,
             </div>
            <div class="options-small ">
            2.0 L,
             </div>
            <div class="options-small doors-hidden">
            4 Door,
             </div>
            <div class="options-small tax-cost-hidden">
            &pound;180 Tax p.a.,
             </div>
            <div class="options-small">Armagh</div>
            <div></div>
            

            

            

            

            

            

            

            

            

            

            

            

            
            

        </div>
        <div class="car-price car-price-half-container hidden-xss hidden-lg hidden-xl pull-right">
            <div class="car-price-left-block text-left">
                <script type="text/javascript">car_writeSoldTextResp('');</script>
            </div>
            <div class="car-price-right-block text-right hidden-md">
                <strong class="monthly_price_hidden"></strong>
                <p class="retail-price--small monthly_price_hidden">Retail:
                    &pound;4,995</p>
                <div class=""><strong>
&pound;4,995
<div class="euroPrice hidden">4995</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>
</strong></div>
                
                <div class="seller-block">
                    
                
                    <div class="seller-info-without-logo">
                        
                        Private Seller
                    
                    </div>
                    

                    

                    

                    
                
                

                
            
                    
                </div>
            </div>
        </div>
        <div class="visible-xss car-price-half-container pull-right">
            <script type="text/javascript">car_writeSoldTextResp('');</script>
            <strong class="monthly_price_hidden"></strong>
            <p class="retail-price--small monthly_price_hidden">Retail:
                &pound;4,995</p>
            <div class=""><strong>
&pound;4,995
<div class="euroPrice hidden">4995</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>
</strong></div>
            <p class="euro-price--small" ></p>
            
                
                    <div class="seller-info-without-logo">
                        
                        Private Seller
                    
                    </div>
                    

                    

                    

                    
                
                

                
            
            
        </div>
    <div class="hidden-sm hidden-xs hidden-xss pull-left md-car-characteristics">
        <dl class="dl-horizontal other-ads">
            
                <dt>Mileage</dt><dd>111000 Miles</dd>
            
            
                <dt class="">Transmission</dt><dd class="">Automatic/Other</dd>
            
            
                <dt class="">Fuel Type</dt><dd class="">Diesel</dd>
            
            
            
            
            
            
                <dt class="bstyle-hidden">Body Style</dt><dd class="bstyle-hidden">Saloon</dd>
            
            
                <dt class="">Engine Size</dt><dd class="">2.0 L</dd>
            
            
                <dt class="doors-hidden">Doors</dt><dd class="doors-hidden">4 Door</dd>
            
            
                <dt class="tax-cost-hidden">Standard Tax</dt><dd class="tax-cost-hidden">&pound;180 p.a.</dd>
            
            
            
            
                <dt>Location</dt><dd>Armagh</dd>
            
            
            <dt class="hidden-xl hidden-lg monthly_price_hidden">
                Monthly Cost
            </dt>
            <dd class="hidden-xl hidden-lg monthly_price_hidden">
                
            </dd>
            <dt class="hidden-xl hidden-lg">
                Price
            </dt>
            <dd class="hidden-xl hidden-lg">
                
&pound;4,995
<div class="euroPrice hidden">4995</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>

            </dd>
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            

            
            
            

            

            

            
            
            

            
        </dl>
    </div>

        <div class="price-centered--wider hidden-md hidden-sm hidden-xs hidden-xss">
            <div class="car-price-left-block text-left">
                <script type="text/javascript">car_writeSoldTextResp('');</script>
            </div>
            <p class="monthly-cost-price monthly_price_hidden"></p>
            <div class="retail-price--small monthly_price_hidden">Retail:
                &pound;4,995</div>
            <div class="">
                
&pound;4,995
<div class="euroPrice hidden">4995</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>

            </div>
            
        </div>

        <div class="visible-md visible-lg visible-xl car-seller">
            
                
                    <div class="seller-info-without-logo">
                        
                        Private Seller
                    
                    </div>
                    

                    

                    

                    
                
                

                
            
            
        </div>
    </div>
    
<a href="/2010-BMW-3-Series-318d-M-Sport-4dr-Step-Auto-312400834?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1" class="btn more-button btn-warning hidden-sm hidden-xs hidden-xss" role="button">More Details</a>

</article><!-- WARNING: Automated extraction of vehicles is prohibited under the Terms of Use. --><article class="add-half-row overflowed-flex car-line no-bottom-border">
    <div class="car-caption visible-md">
        <div class="car-title overflowed-flex space-between">
            <div class="wrap-anywhere">
                <a href="/2012-BMW-3-Series-320d-EfficientDynamics-4dr-306544455?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1">
                    <strong class="wrap-anywhere">
                        <span class="visible-md-inline visible-sm-inline">Aug 2012</span> BMW 3 Series 320d  EfficientDynamics  4dr
                    </strong>
                </a>
            </div>
            <script type="text/javascript">showHeart(306544455, false, false);</script>
        </div>
        <p>
            
        </p>
    </div>
    <div class="car-img">
        
        <a href="/2012-BMW-3-Series-320d-EfficientDynamics-4dr-306544455?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1" title="View the details of this BMW 3 Series 320d EfficientDynamics 4dr in Down" >
            <picture>
                <!--[if IE 9]><video class="hidden"><![endif]-->
                <source srcset="https://image.usedcarsni.com/photos/000/306/544/455/306544464.400.jpg/999999/2x 2x" sizes="100vw" media="(min-width: 760px)" type="image/jpeg" />
                <!--[if IE 9]></video><![endif]-->
                <img class="img-responsive" src="https://image.usedcarsni.com/photos/000/306/544/455/306544464.200.jpg/999999/1x" alt="BMW 3 Series 320d EfficientDynamics 4dr in Down" />
                
                
                
<div class="photo-count-icon-cont 
photo-video-one-icon
 hidden-xss hidden-xs hidden-sm">
    
    
    
<div class="photo-icon 
photo-one-icon
">
<span class="glyphicon glyphicon-camera photo-count-icon"></span>
<div class="photo-count-count">10</div>
</div>

</div>

            </picture>
        </a>
        
        
    </div>
    <div class="car-description">
        <a href="/2012-BMW-3-Series-320d-EfficientDynamics-4dr-306544455?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1"
           class="car-description-overlay-link visible-xss visible-xs visible-sm"
        > </a>
        <div class="car-caption hidden-md">
            <div class="car-title overflowed-flex space-between">
                <div>
                    <a href="/2012-BMW-3-Series-320d-EfficientDynamics-4dr-306544455?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1">
                        <strong class="car-header overflowed">
                            <span class="visible-lg-inline visible-xl-inline">Aug 2012</span>
                            BMW 3 Series 320d  EfficientDynamics  4dr
                        </strong>
                    </a>
                </div>
                <div>
                    <script type="text/javascript">showHeart(306544455, false, false);</script>
                </div>
            </div>
            <p>
                
            </p>
        </div>
   <div class="car-short-info hidden-md hidden-lg hidden-xl overflowed">
            <div class="options-small">
            Aug 2012,
             </div>
            <div class="options-small">
            129000&nbsp;miles,
             </div>
            <div class="options-small ">
            Diesel,
             </div>
            <div class="options-small ">
            Manual,
             </div>
            <div class="options-small load-length-hidden"> </div>
            <div class="options-small load-height-hidden"> </div>
            <div class="options-small payload-hidden"> </div>
            <div class="options-small towing-weight-hidden"> </div>
            <div class="options-small bstyle-hidden">
            Saloon,
             </div>
            <div class="options-small ">
            2.0 L,
             </div>
            <div class="options-small doors-hidden">
            4 Door,
             </div>
            <div class="options-small tax-cost-hidden">
            &pound;20 Tax p.a.,
             </div>
            <div class="options-small">Kilkeel</div>
            <div></div>
            

            

            

            

            

            

            

            

            

            

            

            

            
            

        </div>
        <div class="car-price car-price-half-container hidden-xss hidden-lg hidden-xl pull-right">
            <div class="car-price-left-block text-left">
                <script type="text/javascript">car_writeSoldTextResp('');</script>
            </div>
            <div class="car-price-right-block text-right hidden-md">
                <strong class="monthly_price_hidden"></strong>
                <p class="retail-price--small monthly_price_hidden">Retail:
                    &pound;5,250</p>
                <div class=""><strong>
&pound;5,250
<div class="euroPrice hidden">5250</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>
</strong></div>
                
                <div class="seller-block">
                    
                
                    <div class="seller-info-without-logo">
                        
                        JB CARS
                    
                    </div>
                    

                    

                    

                    
                
                

                
            
                    
                </div>
            </div>
        </div>
        <div class="visible-xss car-price-half-container pull-right">
            <script type="text/javascript">car_writeSoldTextResp('');</script>
            <strong class="monthly_price_hidden"></strong>
            <p class="retail-price--small monthly_price_hidden">Retail:
                &pound;5,250</p>
            <div class=""><strong>
&pound;5,250
<div class="euroPrice hidden">5250</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>
</strong></div>
            <p class="euro-price--small" ></p>
            
                
                    <div class="seller-info-without-logo">
                        
                        JB CARS
                    
                    </div>
                    

                    

                    

                    
                
                

                
            
            
        </div>
    <div class="hidden-sm hidden-xs hidden-xss pull-left md-car-characteristics">
        <dl class="dl-horizontal other-ads">
            
                <dt>Mileage</dt><dd>129000 Miles</dd>
            
            
                <dt class="">Transmission</dt><dd class="">Manual</dd>
            
            
                <dt class="">Fuel Type</dt><dd class="">Diesel</dd>
            
            
            
            
            
            
                <dt class="bstyle-hidden">Body Style</dt><dd class="bstyle-hidden">Saloon</dd>
            
            
                <dt class="">Engine Size</dt><dd class="">2.0 L</dd>
            
            
                <dt class="doors-hidden">Doors</dt><dd class="doors-hidden">4 Door</dd>
            
            
                <dt class="tax-cost-hidden">Standard Tax</dt><dd class="tax-cost-hidden">&pound;20 p.a.</dd>
            
            
            
            
                <dt>Location</dt><dd>Kilkeel</dd>
            
            
            <dt class="hidden-xl hidden-lg monthly_price_hidden">
                Monthly Cost
            </dt>
            <dd class="hidden-xl hidden-lg monthly_price_hidden">
                
            </dd>
            <dt class="hidden-xl hidden-lg">
                Price
            </dt>
            <dd class="hidden-xl hidden-lg">
                
&pound;5,250
<div class="euroPrice hidden">5250</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>

            </dd>
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            

            
            
            

            

            

            
            
            

            
        </dl>
    </div>

        <div class="price-centered--wider hidden-md hidden-sm hidden-xs hidden-xss">
            <div class="car-price-left-block text-left">
                <script type="text/javascript">car_writeSoldTextResp('');</script>
            </div>
            <p class="monthly-cost-price monthly_price_hidden"></p>
            <div class="retail-price--small monthly_price_hidden">Retail:
                &pound;5,250</div>
            <div class="">
                
&pound;5,250
<div class="euroPrice hidden">5250</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>

            </div>
            
        </div>

        <div class="visible-md visible-lg visible-xl car-seller">
            
                
                    <div class="seller-info-without-logo">
                        
                        JB CARS
                    
                    </div>
                    

                    

                    

                    
                
                

                
            
            
        </div>
    </div>
    
<a href="/2012-BMW-3-Series-320d-EfficientDynamics-4dr-306544455?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1" class="btn more-button btn-warning hidden-sm hidden-xs hidden-xss" role="button">More Details</a>

</article>
<div class="with-bg middle-banner banner-desktop">
    <div id="USE_D_Search_Middle_1"></div>
</div>
<div class="with-bg middle-banner banner-mobile">
    <div id="USE_M_Search_InList_1"></div>
</div>
<!-- WARNING: Automated extraction of vehicles is prohibited under the Terms of Use. --><article class="add-half-row overflowed-flex car-line ">
    <div class="car-caption visible-md">
        <div class="car-title overflowed-flex space-between">
            <div class="wrap-anywhere">
                <a href="/2011-BMW-3-Series-318d-Performance-Edition-4dr-311486791?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1">
                    <strong class="wrap-anywhere">
                        <span class="visible-md-inline visible-sm-inline">Nov 2011</span> BMW 3 Series 318d  Performance  Edition  4dr
                    </strong>
                </a>
            </div>
            <script type="text/javascript">showHeart(311486791, false, false);</script>
        </div>
        <p>
            
<span class="technical-subtitle">
                STUNNING CAR, VALUE FOR MONEY
                </span>

        </p>
    </div>
    <div class="car-img">
        
        <a href="/2011-BMW-3-Series-318d-Performance-Edition-4dr-311486791?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1" title="View the details of this BMW 3 Series SALOON SPECIAL EDITIONS in Down" >
            <picture>
                <!--[if IE 9]><video class="hidden"><![endif]-->
                <source srcset="https://image.usedcarsni.com/photos/000/311/486/791/311486800.400.jpg/999999/2x 2x" sizes="100vw" media="(min-width: 760px)" type="image/jpeg" />
                <!--[if IE 9]></video><![endif]-->
                <img class="img-responsive" src="https://image.usedcarsni.com/photos/000/311/486/791/311486800.200.jpg/999999/1x" alt="BMW 3 Series SALOON SPECIAL EDITIONS in Down" />
                
                
                
<div class="photo-count-icon-cont 
photo-video-one-icon
 hidden-xss hidden-xs hidden-sm">
    
    
    
<div class="photo-icon 
photo-one-icon
">
<span class="glyphicon glyphicon-camera photo-count-icon"></span>
<div class="photo-count-count">10</div>
</div>

</div>

            </picture>
        </a>
        
        
    </div>
    <div class="car-description">
        <a href="/2011-BMW-3-Series-318d-Performance-Edition-4dr-311486791?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1"
           class="car-description-overlay-link visible-xss visible-xs visible-sm"
        > </a>
        <div class="car-caption hidden-md">
            <div class="car-title overflowed-flex space-between">
                <div>
                    <a href="/2011-BMW-3-Series-318d-Performance-Edition-4dr-311486791?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1">
                        <strong class="car-header overflowed">
                            <span class="visible-lg-inline visible-xl-inline">Nov 2011</span>
                            BMW 3 Series 318d  Performance  Edition  4dr
                        </strong>
                    </a>
                </div>
                <div>
                    <script type="text/javascript">showHeart(311486791, false, false);</script>
                </div>
            </div>
            <p>
                
<span class="technical-subtitle">
                STUNNING CAR, VALUE FOR MONEY
                </span>

            </p>
        </div>
   <div class="car-short-info hidden-md hidden-lg hidden-xl overflowed">
            <div class="options-small">
            Nov 2011,
             </div>
            <div class="options-small">
            101000&nbsp;miles,
             </div>
            <div class="options-small ">
            Diesel,
             </div>
            <div class="options-small ">
            Manual,
             </div>
            <div class="options-small load-length-hidden"> </div>
            <div class="options-small load-height-hidden"> </div>
            <div class="options-small payload-hidden"> </div>
            <div class="options-small towing-weight-hidden"> </div>
            <div class="options-small bstyle-hidden">
            Saloon,
             </div>
            <div class="options-small ">
            2.0 L,
             </div>
            <div class="options-small doors-hidden">
            4 Door,
             </div>
            <div class="options-small tax-cost-hidden">
            &pound;30 Tax p.a.,
             </div>
            <div class="options-small">Lisburn</div>
            <div></div>
            

            

            

            

            

            

            

            

            

            

            

            

            
            

        </div>
        <div class="car-price car-price-half-container hidden-xss hidden-lg hidden-xl pull-right">
            <div class="car-price-left-block text-left">
                <script type="text/javascript">car_writeSoldTextResp('');</script>
            </div>
            <div class="car-price-right-block text-right hidden-md">
                <strong class="monthly_price_hidden"></strong>
                <p class="retail-price--small monthly_price_hidden">Retail:
                    &pound;5,495</p>
                <div class=""><strong>
&pound;5,495
<div class="euroPrice hidden">5495</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>
</strong></div>
                
                <div class="seller-block">
                    
                
                <!--ul_begin--><img src="https://image.usedcarsni.com/user/000/232/140/463/158288547338c9ca8371.svg"  class="img-responsive hq-logo-svg" alt="" /><!--ul_end-->
                
                

                
            
                    
                </div>
            </div>
        </div>
        <div class="visible-xss car-price-half-container pull-right">
            <script type="text/javascript">car_writeSoldTextResp('');</script>
            <strong class="monthly_price_hidden"></strong>
            <p class="retail-price--small monthly_price_hidden">Retail:
                &pound;5,495</p>
            <div class=""><strong>
&pound;5,495
<div class="euroPrice hidden">5495</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>
</strong></div>
            <p class="euro-price--small" ></p>
            
                
                <!--ul_begin--><img src="https://image.usedcarsni.com/user/000/232/140/463/158288547338c9ca8371.svg"  class="img-responsive hq-logo-svg" alt="" /><!--ul_end-->
                
                

                
            
            
        </div>
    <div class="hidden-sm hidden-xs hidden-xss pull-left md-car-characteristics">
        <dl class="dl-horizontal other-ads">
            
                <dt>Mileage</dt><dd>101000 Miles</dd>
            
            
                <dt class="">Transmission</dt><dd class="">Manual</dd>
            
            
                <dt class="">Fuel Type</dt><dd class="">Diesel</dd>
            
            
            
            
            
            
                <dt class="bstyle-hidden">Body Style</dt><dd class="bstyle-hidden">Saloon</dd>
            
            
                <dt class="">Engine Size</dt><dd class="">2.0 L</dd>
            
            
                <dt class="doors-hidden">Doors</dt><dd class="doors-hidden">4 Door</dd>
            
            
                <dt class="tax-cost-hidden">Standard Tax</dt><dd class="tax-cost-hidden">&pound;30 p.a.</dd>
            
            
            
            
                <dt>Location</dt><dd>Lisburn</dd>
            
            
            <dt class="hidden-xl hidden-lg monthly_price_hidden">
                Monthly Cost
            </dt>
            <dd class="hidden-xl hidden-lg monthly_price_hidden">
                
            </dd>
            <dt class="hidden-xl hidden-lg">
                Price
            </dt>
            <dd class="hidden-xl hidden-lg">
                
&pound;5,495
<div class="euroPrice hidden">5495</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>

            </dd>
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            

            
            
            

            

            

            
            
            

            
        </dl>
    </div>

        <div class="price-centered--wider hidden-md hidden-sm hidden-xs hidden-xss">
            <div class="car-price-left-block text-left">
                <script type="text/javascript">car_writeSoldTextResp('');</script>
            </div>
            <p class="monthly-cost-price monthly_price_hidden"></p>
            <div class="retail-price--small monthly_price_hidden">Retail:
                &pound;5,495</div>
            <div class="">
                
&pound;5,495
<div class="euroPrice hidden">5495</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>

            </div>
            
        </div>

        <div class="visible-md visible-lg visible-xl car-seller">
            
                
                <!--ul_begin--><img src="https://image.usedcarsni.com/user/000/232/140/463/158288547338c9ca8371.svg"  class="img-responsive hq-logo-svg" alt="" /><!--ul_end-->
                
                

                
            
            
        </div>
    </div>
    
<a href="/2011-BMW-3-Series-318d-Performance-Edition-4dr-311486791?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1" class="btn more-button btn-warning hidden-sm hidden-xs hidden-xss" role="button">More Details</a>

</article><!-- WARNING: Automated extraction of vehicles is prohibited under the Terms of Use. --><article class="add-half-row overflowed-flex car-line ">
    <div class="car-caption visible-md">
        <div class="car-title overflowed-flex space-between">
            <div class="wrap-anywhere">
                <a href="/2010-BMW-3-Series-318i-Sport-Plus-Edition-5dr-312668149?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1">
                    <strong class="wrap-anywhere">
                        <span class="visible-md-inline visible-sm-inline">Oct 2010</span> BMW 3 Series 318i  Sport  Plus  Edition  5dr
                    </strong>
                </a>
            </div>
            <script type="text/javascript">showHeart(312668149, false, false);</script>
        </div>
        <p>
            
        </p>
    </div>
    <div class="car-img">
        
        <a href="/2010-BMW-3-Series-318i-Sport-Plus-Edition-5dr-312668149?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1" title="View the details of this BMW 3 Series TOURING in Down" >
            <picture>
                <!--[if IE 9]><video class="hidden"><![endif]-->
                <source srcset="https://image.usedcarsni.com/photos/000/312/668/149/312668158.400.jpg/999999/2x 2x" sizes="100vw" media="(min-width: 760px)" type="image/jpeg" />
                <!--[if IE 9]></video><![endif]-->
                <img class="img-responsive" src="https://image.usedcarsni.com/photos/000/312/668/149/312668158.200.jpg/999999/1x" alt="BMW 3 Series TOURING in Down" />
                
                
                
<div class="photo-count-icon-cont 
photo-video-one-icon
 hidden-xss hidden-xs hidden-sm">
    
    
    
<div class="photo-icon 
photo-one-icon
">
<span class="glyphicon glyphicon-camera photo-count-icon"></span>
<div class="photo-count-count">19</div>
</div>

</div>

            </picture>
        </a>
        
        
    </div>
    <div class="car-description">
        <a href="/2010-BMW-3-Series-318i-Sport-Plus-Edition-5dr-312668149?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1"
           class="car-description-overlay-link visible-xss visible-xs visible-sm"
        > </a>
        <div class="car-caption hidden-md">
            <div class="car-title overflowed-flex space-between">
                <div>
                    <a href="/2010-BMW-3-Series-318i-Sport-Plus-Edition-5dr-312668149?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1">
                        <strong class="car-header overflowed">
                            <span class="visible-lg-inline visible-xl-inline">Oct 2010</span>
                            BMW 3 Series 318i  Sport  Plus  Edition  5dr
                        </strong>
                    </a>
                </div>
                <div>
                    <script type="text/javascript">showHeart(312668149, false, false);</script>
                </div>
            </div>
            <p>
                
            </p>
        </div>
   <div class="car-short-info hidden-md hidden-lg hidden-xl overflowed">
            <div class="options-small">
            Oct 2010,
             </div>
            <div class="options-small">
            104000&nbsp;miles,
             </div>
            <div class="options-small ">
            Petrol,
             </div>
            <div class="options-small ">
            Manual,
             </div>
            <div class="options-small load-length-hidden"> </div>
            <div class="options-small load-height-hidden"> </div>
            <div class="options-small payload-hidden"> </div>
            <div class="options-small towing-weight-hidden"> </div>
            <div class="options-small bstyle-hidden">
            Estate,
             </div>
            <div class="options-small ">
            2.0 L,
             </div>
            <div class="options-small doors-hidden">
            5 Door,
             </div>
            <div class="options-small tax-cost-hidden">
            &pound;180 Tax p.a.,
             </div>
            <div class="options-small">Banbridge</div>
            <div></div>
            

            

            

            

            

            

            

            

            

            

            

            

            
            

        </div>
        <div class="car-price car-price-half-container hidden-xss hidden-lg hidden-xl pull-right">
            <div class="car-price-left-block text-left">
                <script type="text/javascript">car_writeSoldTextResp('');</script>
            </div>
            <div class="car-price-right-block text-right hidden-md">
                <strong class="monthly_price_hidden"></strong>
                <p class="retail-price--small monthly_price_hidden">Retail:
                    &pound;5,650</p>
                <div class=""><strong>
&pound;5,650
<div class="euroPrice hidden">5650</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>
</strong></div>
                
                <div class="seller-block">
                    
                
                <!--ul_begin--><img src="https://image.usedcarsni.com/user/000/106/737/538/1615234965f9298e675b.svg"  class="img-responsive hq-logo-svg" alt="" /><!--ul_end-->
                
                

                
            
                    
                </div>
            </div>
        </div>
        <div class="visible-xss car-price-half-container pull-right">
            <script type="text/javascript">car_writeSoldTextResp('');</script>
            <strong class="monthly_price_hidden"></strong>
            <p class="retail-price--small monthly_price_hidden">Retail:
                &pound;5,650</p>
            <div class=""><strong>
&pound;5,650
<div class="euroPrice hidden">5650</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>
</strong></div>
            <p class="euro-price--small" ></p>
            
                
                <!--ul_begin--><img src="https://image.usedcarsni.com/user/000/106/737/538/1615234965f9298e675b.svg"  class="img-responsive hq-logo-svg" alt="" /><!--ul_end-->
                
                

                
            
            
        </div>
    <div class="hidden-sm hidden-xs hidden-xss pull-left md-car-characteristics">
        <dl class="dl-horizontal other-ads">
            
                <dt>Mileage</dt><dd>104000 Miles</dd>
            
            
                <dt class="">Transmission</dt><dd class="">Manual</dd>
            
            
                <dt class="">Fuel Type</dt><dd class="">Petrol</dd>
            
            
            
            
            
            
                <dt class="bstyle-hidden">Body Style</dt><dd class="bstyle-hidden">Estate</dd>
            
            
                <dt class="">Engine Size</dt><dd class="">2.0 L</dd>
            
            
                <dt class="doors-hidden">Doors</dt><dd class="doors-hidden">5 Door</dd>
            
            
                <dt class="tax-cost-hidden">Standard Tax</dt><dd class="tax-cost-hidden">&pound;180 p.a.</dd>
            
            
            
            
                <dt>Location</dt><dd>Banbridge</dd>
            
            
            <dt class="hidden-xl hidden-lg monthly_price_hidden">
                Monthly Cost
            </dt>
            <dd class="hidden-xl hidden-lg monthly_price_hidden">
                
            </dd>
            <dt class="hidden-xl hidden-lg">
                Price
            </dt>
            <dd class="hidden-xl hidden-lg">
                
&pound;5,650
<div class="euroPrice hidden">5650</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>

            </dd>
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            

            
            
            

            

            

            
            
            

            
        </dl>
    </div>

        <div class="price-centered--wider hidden-md hidden-sm hidden-xs hidden-xss">
            <div class="car-price-left-block text-left">
                <script type="text/javascript">car_writeSoldTextResp('');</script>
            </div>
            <p class="monthly-cost-price monthly_price_hidden"></p>
            <div class="retail-price--small monthly_price_hidden">Retail:
                &pound;5,650</div>
            <div class="">
                
&pound;5,650
<div class="euroPrice hidden">5650</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>

            </div>
            
        </div>

        <div class="visible-md visible-lg visible-xl car-seller">
            
                
                <!--ul_begin--><img src="https://image.usedcarsni.com/user/000/106/737/538/1615234965f9298e675b.svg"  class="img-responsive hq-logo-svg" alt="" /><!--ul_end-->
                
                

                
            
            
        </div>
    </div>
    
<a href="/2010-BMW-3-Series-318i-Sport-Plus-Edition-5dr-312668149?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1" class="btn more-button btn-warning hidden-sm hidden-xs hidden-xss" role="button">More Details</a>

</article><!-- WARNING: Automated extraction of vehicles is prohibited under the Terms of Use. --><article class="add-half-row overflowed-flex car-line ">
    <div class="car-caption visible-md">
        <div class="car-title overflowed-flex space-between">
            <div class="wrap-anywhere">
                <a href="/2022-BMW-GT-C400-C400-Gt-21My-311728956?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1">
                    <strong class="wrap-anywhere">
                        <span class="visible-md-inline visible-sm-inline">May 2022</span> BMW GT C400  C400  Gt  (21My)
                    </strong>
                </a>
            </div>
            
        </div>
        <p>
            
<span class="technical-subtitle">
                Comfort Pack &amp; TFT Dash
                </span>

        </p>
    </div>
    <div class="car-img">
        
        <a href="/2022-BMW-GT-C400-C400-Gt-21My-311728956?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1" title="View the details of this BMW GT C400 C400 Gt (21My) in Antrim" >
            <picture>
                <!--[if IE 9]><video class="hidden"><![endif]-->
                <source srcset="https://image.usedcarsni.com/photos/000/311/728/956/311729062.400.jpg/999999/2x 2x" sizes="100vw" media="(min-width: 760px)" type="image/jpeg" />
                <!--[if IE 9]></video><![endif]-->
                <img class="img-responsive" src="https://image.usedcarsni.com/photos/000/311/728/956/311729062.200.jpg/999999/1x" alt="BMW GT C400 C400 Gt (21My) in Antrim" />
                
                
                
<div class="photo-count-icon-cont 
photo-video-one-icon
 hidden-xss hidden-xs hidden-sm">
    
    
    
<div class="photo-icon 
photo-one-icon
">
<span class="glyphicon glyphicon-camera photo-count-icon"></span>
<div class="photo-count-count">25</div>
</div>

</div>

            </picture>
        </a>
        
        
    </div>
    <div class="car-description">
        <a href="/2022-BMW-GT-C400-C400-Gt-21My-311728956?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1"
           class="car-description-overlay-link visible-xss visible-xs visible-sm"
        > </a>
        <div class="car-caption hidden-md">
            <div class="car-title overflowed-flex space-between">
                <div>
                    <a href="/2022-BMW-GT-C400-C400-Gt-21My-311728956?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1">
                        <strong class="car-header overflowed">
                            <span class="visible-lg-inline visible-xl-inline">May 2022</span>
                            BMW GT C400  C400  Gt  (21My)
                        </strong>
                    </a>
                </div>
                <div>
                    
                </div>
            </div>
            <p>
                
<span class="technical-subtitle">
                Comfort Pack &amp; TFT Dash
                </span>

            </p>
        </div>
   <div class="car-short-info hidden-md hidden-lg hidden-xl overflowed">
            <div class="options-small">
            May 2022,
             </div>
            <div class="options-small">
            3902&nbsp;miles,
             </div>
            <div class="options-small ">
            Petrol,
             </div>
            <div class="options-small ">
            Automatic,
             </div>
            <div class="options-small load-length-hidden"> </div>
            <div class="options-small load-height-hidden"> </div>
            <div class="options-small payload-hidden"> </div>
            <div class="options-small towing-weight-hidden"> </div>
            <div class="options-small bstyle-hidden">
            Motorcycle,
             </div>
            <div class="options-small ">
            0.4 L,
             </div>
            <div class="options-small doors-hidden"> </div>
            <div class="options-small tax-cost-hidden">
            &pound;101 Tax p.a.,
             </div>
            <div class="options-small">Belfast</div>
            <div></div>
            

            

            

            

            

            

            

            

            

            

            

            

            
            

        </div>
        <div class="car-price car-price-half-container hidden-xss hidden-lg hidden-xl pull-right">
            <div class="car-price-left-block text-left">
                <script type="text/javascript">car_writeSoldTextResp('');</script>
            </div>
            <div class="car-price-right-block text-right hidden-md">
                <strong class="monthly_price_hidden"></strong>
                <p class="retail-price--small monthly_price_hidden">Retail:
                    &pound;5,699</p>
                <div class=""><strong>
&pound;5,699
<div class="euroPrice hidden">5699</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>
</strong></div>
                
                <div class="seller-block">
                    
                
                <!--ul_begin--><img src="https://image.usedcarsni.com/user/000/014/925/476/162186125905fdba0ca8.svg"  class="img-responsive hq-logo-svg" alt="" /><!--ul_end-->
                
                

                
            
                    
            <div class="hidden-sm hidden-xs hidden-xss">
              <dt>Dealer Rating</dt>
              <dd>
            <div class="review-stars-new-empty">
              <div class="review-stars-new-whole" style="width: 90%;">
              </div>
            </div>
            </dd>
            </div>
            <div class="hidden-md hidden-lg hidden-xl">
              
            <div class="review-stars-new-empty">
              <div class="review-stars-new-whole" style="width: 90%;">
              </div>
            </div>
            
              <div class="seller-rating-text">Rating</div>
            </div>
            
                </div>
            </div>
        </div>
        <div class="visible-xss car-price-half-container pull-right">
            <script type="text/javascript">car_writeSoldTextResp('');</script>
            <strong class="monthly_price_hidden"></strong>
            <p class="retail-price--small monthly_price_hidden">Retail:
                &pound;5,699</p>
            <div class=""><strong>
&pound;5,699
<div class="euroPrice hidden">5699</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>
</strong></div>
            <p class="euro-price--small" ></p>
            
                
                <!--ul_begin--><img src="https://image.usedcarsni.com/user/000/014/925/476/162186125905fdba0ca8.svg"  class="img-responsive hq-logo-svg" alt="" /><!--ul_end-->
                
                

                
            
            
            <div class="hidden-sm hidden-xs hidden-xss">
              <dt>Dealer Rating</dt>
              <dd>
            <div class="review-stars-new-empty">
              <div class="review-stars-new-whole" style="width: 90%;">
              </div>
            </div>
            </dd>
            </div>
            <div class="hidden-md hidden-lg hidden-xl">
              
            <div class="review-stars-new-empty">
              <div class="review-stars-new-whole" style="width: 90%;">
              </div>
            </div>
            
              <div class="seller-rating-text">Rating</div>
            </div>
            
        </div>
    <div class="hidden-sm hidden-xs hidden-xss pull-left md-car-characteristics">
        <dl class="dl-horizontal other-ads">
            
                <dt>Mileage</dt><dd>3902 Miles</dd>
            
            
                <dt class="">Transmission</dt><dd class="">Automatic</dd>
            
            
                <dt class="">Fuel Type</dt><dd class="">Petrol</dd>
            
            
            
            
            
            
                <dt class="bstyle-hidden">Body Style</dt><dd class="bstyle-hidden">Motorcycle</dd>
            
            
                <dt class="">Engine Size</dt><dd class="">0.4 L</dd>
            
            
            
                <dt class="tax-cost-hidden">Standard Tax</dt><dd class="tax-cost-hidden">&pound;101 p.a.</dd>
            
            
            
            
                <dt>Location</dt><dd>Belfast</dd>
            
            
            <dt class="hidden-xl hidden-lg monthly_price_hidden">
                Monthly Cost
            </dt>
            <dd class="hidden-xl hidden-lg monthly_price_hidden">
                
            </dd>
            <dt class="hidden-xl hidden-lg">
                Price
            </dt>
            <dd class="hidden-xl hidden-lg">
                
&pound;5,699
<div class="euroPrice hidden">5699</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>

            </dd>
            
            
            
            
            
            <div class="hidden-sm hidden-xs hidden-xss">
              <dt>Dealer Rating</dt>
              <dd>
            <div class="review-stars-new-empty">
              <div class="review-stars-new-whole" style="width: 90%;">
              </div>
            </div>
            </dd>
            </div>
            <div class="hidden-md hidden-lg hidden-xl">
              
            <div class="review-stars-new-empty">
              <div class="review-stars-new-whole" style="width: 90%;">
              </div>
            </div>
            
              <div class="seller-rating-text">Rating</div>
            </div>
            
            
            
            
            
            
            
            
            
            
            
            
            

            
            
            

            

            

            
            
            

            
        </dl>
    </div>

        <div class="price-centered--wider hidden-md hidden-sm hidden-xs hidden-xss">
            <div class="car-price-left-block text-left">
                <script type="text/javascript">car_writeSoldTextResp('');</script>
            </div>
            <p class="monthly-cost-price monthly_price_hidden"></p>
            <div class="retail-price--small monthly_price_hidden">Retail:
                &pound;5,699</div>
            <div class="">
                
&pound;5,699
<div class="euroPrice hidden">5699</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>

            </div>
            
        </div>

        <div class="visible-md visible-lg visible-xl car-seller">
            
                
                <!--ul_begin--><img src="https://image.usedcarsni.com/user/000/014/925/476/162186125905fdba0ca8.svg"  class="img-responsive hq-logo-svg" alt="" /><!--ul_end-->
                
                

                
            
            
        </div>
    </div>
    
<a href="/2022-BMW-GT-C400-C400-Gt-21My-311728956?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1" class="btn more-button btn-warning hidden-sm hidden-xs hidden-xss" role="button">More Details</a>

</article><!-- WARNING: Automated extraction of vehicles is prohibited under the Terms of Use. --><article class="add-half-row overflowed-flex car-line ">
    <div class="car-caption visible-md">
        <div class="car-title overflowed-flex space-between">
            <div class="wrap-anywhere">
                <a href="/2010-BMW-3-Series-318d-M-Sport-5dr-300066951?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1">
                    <strong class="wrap-anywhere">
                        <span class="visible-md-inline visible-sm-inline">Oct 2010</span> BMW 3 Series 318d  M  Sport  5dr
                    </strong>
                </a>
            </div>
            <script type="text/javascript">showHeart(300066951, false, false);</script>
        </div>
        <p>
            
<span class="technical-subtitle">
                13 STAMP SERVICE HISTORY, IMMACULATE CAR, &pound; 30 TAX
                </span>

        </p>
    </div>
    <div class="car-img">
        
        <a href="/2010-BMW-3-Series-318d-M-Sport-5dr-300066951?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1" title="View the details of this BMW 3 Series DIESEL TOURING in Armagh" >
            <picture>
                <!--[if IE 9]><video class="hidden"><![endif]-->
                <source srcset="https://image.usedcarsni.com/photos/000/300/066/951/300066966.400.jpg/999999/2x 2x" sizes="100vw" media="(min-width: 760px)" type="image/jpeg" />
                <!--[if IE 9]></video><![endif]-->
                <img class="img-responsive" src="https://image.usedcarsni.com/photos/000/300/066/951/300066966.200.jpg/999999/1x" alt="BMW 3 Series DIESEL TOURING in Armagh" />
                
                
                
<div class="photo-count-icon-cont 
photo-video-one-icon
 hidden-xss hidden-xs hidden-sm">
    
    
    
<div class="photo-icon 
photo-one-icon
">
<span class="glyphicon glyphicon-camera photo-count-icon"></span>
<div class="photo-count-count">21</div>
</div>

</div>

            </picture>
        </a>
        
        
    </div>
    <div class="car-description">
        <a href="/2010-BMW-3-Series-318d-M-Sport-5dr-300066951?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1"
           class="car-description-overlay-link visible-xss visible-xs visible-sm"
        > </a>
        <div class="car-caption hidden-md">
            <div class="car-title overflowed-flex space-between">
                <div>
                    <a href="/2010-BMW-3-Series-318d-M-Sport-5dr-300066951?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1">
                        <strong class="car-header overflowed">
                            <span class="visible-lg-inline visible-xl-inline">Oct 2010</span>
                            BMW 3 Series 318d  M  Sport  5dr
                        </strong>
                    </a>
                </div>
                <div>
                    <script type="text/javascript">showHeart(300066951, false, false);</script>
                </div>
            </div>
            <p>
                
<span class="technical-subtitle">
                13 STAMP SERVICE HISTORY, IMMACULATE CAR, &pound; 30 TAX
                </span>

            </p>
        </div>
   <div class="car-short-info hidden-md hidden-lg hidden-xl overflowed">
            <div class="options-small">
            Oct 2010,
             </div>
            <div class="options-small">
            135000&nbsp;miles,
             </div>
            <div class="options-small ">
            Diesel,
             </div>
            <div class="options-small ">
            Manual,
             </div>
            <div class="options-small load-length-hidden"> </div>
            <div class="options-small load-height-hidden"> </div>
            <div class="options-small payload-hidden"> </div>
            <div class="options-small towing-weight-hidden"> </div>
            <div class="options-small bstyle-hidden">
            Estate,
             </div>
            <div class="options-small ">
            2.0 L,
             </div>
            <div class="options-small doors-hidden">
            5 Door,
             </div>
            <div class="options-small tax-cost-hidden">
            &pound;30 Tax p.a.,
             </div>
            <div class="options-small">Portadown</div>
            <div></div>
            

            

            

            

            

            

            

            

            

            

            

            

            
            

        </div>
        <div class="car-price car-price-half-container hidden-xss hidden-lg hidden-xl pull-right">
            <div class="car-price-left-block text-left">
                <script type="text/javascript">car_writeSoldTextResp('');</script>
            </div>
            <div class="car-price-right-block text-right hidden-md">
                <strong class="monthly_price_hidden"></strong>
                <p class="retail-price--small monthly_price_hidden">Retail:
                    &pound;5,750</p>
                <div class=""><strong>
&pound;5,750
<div class="euroPrice hidden">5750</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>
</strong></div>
                
                <div class="seller-block">
                    
                
                <!--ul_begin--><img src="https://image.usedcarsni.com/user/000/156/764/839/1649709244f912a1acd2.svg"  class="img-responsive hq-logo-svg" alt="" /><!--ul_end-->
                
                

                
            
                    
                </div>
            </div>
        </div>
        <div class="visible-xss car-price-half-container pull-right">
            <script type="text/javascript">car_writeSoldTextResp('');</script>
            <strong class="monthly_price_hidden"></strong>
            <p class="retail-price--small monthly_price_hidden">Retail:
                &pound;5,750</p>
            <div class=""><strong>
&pound;5,750
<div class="euroPrice hidden">5750</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>
</strong></div>
            <p class="euro-price--small" ></p>
            
                
                <!--ul_begin--><img src="https://image.usedcarsni.com/user/000/156/764/839/1649709244f912a1acd2.svg"  class="img-responsive hq-logo-svg" alt="" /><!--ul_end-->
                
                

                
            
            
        </div>
    <div class="hidden-sm hidden-xs hidden-xss pull-left md-car-characteristics">
        <dl class="dl-horizontal other-ads">
            
                <dt>Mileage</dt><dd>135000 Miles</dd>
            
            
                <dt class="">Transmission</dt><dd class="">Manual</dd>
            
            
                <dt class="">Fuel Type</dt><dd class="">Diesel</dd>
            
            
            
            
            
            
                <dt class="bstyle-hidden">Body Style</dt><dd class="bstyle-hidden">Estate</dd>
            
            
                <dt class="">Engine Size</dt><dd class="">2.0 L</dd>
            
            
                <dt class="doors-hidden">Doors</dt><dd class="doors-hidden">5 Door</dd>
            
            
                <dt class="tax-cost-hidden">Standard Tax</dt><dd class="tax-cost-hidden">&pound;30 p.a.</dd>
            
            
            
            
                <dt>Location</dt><dd>Portadown</dd>
            
            
            <dt class="hidden-xl hidden-lg monthly_price_hidden">
                Monthly Cost
            </dt>
            <dd class="hidden-xl hidden-lg monthly_price_hidden">
                
            </dd>
            <dt class="hidden-xl hidden-lg">
                Price
            </dt>
            <dd class="hidden-xl hidden-lg">
                
&pound;5,750
<div class="euroPrice hidden">5750</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>

            </dd>
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            

            
            
            

            

            

            
            
            

            
        </dl>
    </div>

        <div class="price-centered--wider hidden-md hidden-sm hidden-xs hidden-xss">
            <div class="car-price-left-block text-left">
                <script type="text/javascript">car_writeSoldTextResp('');</script>
            </div>
            <p class="monthly-cost-price monthly_price_hidden"></p>
            <div class="retail-price--small monthly_price_hidden">Retail:
                &pound;5,750</div>
            <div class="">
                
&pound;5,750
<div class="euroPrice hidden">5750</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>

            </div>
            
        </div>

        <div class="visible-md visible-lg visible-xl car-seller">
            
                
                <!--ul_begin--><img src="https://image.usedcarsni.com/user/000/156/764/839/1649709244f912a1acd2.svg"  class="img-responsive hq-logo-svg" alt="" /><!--ul_end-->
                
                

                
            
            
        </div>
    </div>
    
<a href="/2010-BMW-3-Series-318d-M-Sport-5dr-300066951?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1" class="btn more-button btn-warning hidden-sm hidden-xs hidden-xss" role="button">More Details</a>

</article><!-- WARNING: Automated extraction of vehicles is prohibited under the Terms of Use. --><article class="add-half-row overflowed-flex car-line ">
    <div class="car-caption visible-md">
        <div class="car-title overflowed-flex space-between">
            <div class="wrap-anywhere">
                <a href="/2008-BMW-3-Series-335d-M-Sport-2dr-Auto-310305114?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1">
                    <strong class="wrap-anywhere">
                        <span class="visible-md-inline visible-sm-inline">Jan 2008</span> BMW 3 Series 335d  M  Sport  2dr  Auto
                    </strong>
                </a>
            </div>
            <script type="text/javascript">showHeart(310305114, false, false);</script>
        </div>
        <p>
            
<span class="technical-subtitle">
                GREAT DIESEL PROFORMANCE ! FILE OF SERVICE HISTORY GREATSPEC
                </span>

        </p>
    </div>
    <div class="car-img">
        
        <a href="/2008-BMW-3-Series-335d-M-Sport-2dr-Auto-310305114?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1" title="View the details of this BMW 3 Series DIESEL COUPE in Antrim" >
            <picture>
                <!--[if IE 9]><video class="hidden"><![endif]-->
                <source srcset="https://image.usedcarsni.com/photos/000/310/305/114/310305123.400.jpg/999999/2x 2x" sizes="100vw" media="(min-width: 760px)" type="image/jpeg" />
                <!--[if IE 9]></video><![endif]-->
                <img class="img-responsive" src="https://image.usedcarsni.com/photos/000/310/305/114/310305123.200.jpg/999999/1x" alt="BMW 3 Series DIESEL COUPE in Antrim" />
                
                
                
<div class="photo-count-icon-cont 
photo-video-one-icon
 hidden-xss hidden-xs hidden-sm">
    
    
    
<div class="photo-icon 
photo-one-icon
">
<span class="glyphicon glyphicon-camera photo-count-icon"></span>
<div class="photo-count-count">18</div>
</div>

</div>

            </picture>
        </a>
        
        
    </div>
    <div class="car-description">
        <a href="/2008-BMW-3-Series-335d-M-Sport-2dr-Auto-310305114?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1"
           class="car-description-overlay-link visible-xss visible-xs visible-sm"
        > </a>
        <div class="car-caption hidden-md">
            <div class="car-title overflowed-flex space-between">
                <div>
                    <a href="/2008-BMW-3-Series-335d-M-Sport-2dr-Auto-310305114?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1">
                        <strong class="car-header overflowed">
                            <span class="visible-lg-inline visible-xl-inline">Jan 2008</span>
                            BMW 3 Series 335d  M  Sport  2dr  Auto
                        </strong>
                    </a>
                </div>
                <div>
                    <script type="text/javascript">showHeart(310305114, false, false);</script>
                </div>
            </div>
            <p>
                
<span class="technical-subtitle">
                GREAT DIESEL PROFORMANCE ! FILE OF SERVICE HISTORY GREATSPEC
                </span>

            </p>
        </div>
   <div class="car-short-info hidden-md hidden-lg hidden-xl overflowed">
            <div class="options-small">
            Jan 2008,
             </div>
            <div class="options-small">
            164000&nbsp;miles,
             </div>
            <div class="options-small ">
            Diesel,
             </div>
            <div class="options-small ">
            Semi-Automatic,
             </div>
            <div class="options-small load-length-hidden"> </div>
            <div class="options-small load-height-hidden"> </div>
            <div class="options-small payload-hidden"> </div>
            <div class="options-small towing-weight-hidden"> </div>
            <div class="options-small bstyle-hidden">
            Coupe,
             </div>
            <div class="options-small ">
            3.0 L,
             </div>
            <div class="options-small doors-hidden">
            2 Door,
             </div>
            <div class="options-small tax-cost-hidden"> </div>
            <div class="options-small">Newtownabbey</div>
            <div></div>
            

            

            

            

            

            

            

            

            

            

            

            

            
            

        </div>
        <div class="car-price car-price-half-container hidden-xss hidden-lg hidden-xl pull-right">
            <div class="car-price-left-block text-left">
                <script type="text/javascript">car_writeSoldTextResp('');</script>
            </div>
            <div class="car-price-right-block text-right hidden-md">
                <strong class="monthly_price_hidden"></strong>
                <p class="retail-price--small monthly_price_hidden">Retail:
                    &pound;5,975</p>
                <div class=""><strong>
&pound;5,975
<div class="euroPrice hidden">5975</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>
</strong></div>
                
                <div class="seller-block">
                    
                
                <!--ul_begin--><img src="https://image.usedcarsni.com/user/000/028/170/844/16177121782406d7accb.svg"  class="img-responsive hq-logo-svg" alt="" /><!--ul_end-->
                
                

                
            
                    
                </div>
            </div>
        </div>
        <div class="visible-xss car-price-half-container pull-right">
            <script type="text/javascript">car_writeSoldTextResp('');</script>
            <strong class="monthly_price_hidden"></strong>
            <p class="retail-price--small monthly_price_hidden">Retail:
                &pound;5,975</p>
            <div class=""><strong>
&pound;5,975
<div class="euroPrice hidden">5975</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>
</strong></div>
            <p class="euro-price--small" ></p>
            
                
                <!--ul_begin--><img src="https://image.usedcarsni.com/user/000/028/170/844/16177121782406d7accb.svg"  class="img-responsive hq-logo-svg" alt="" /><!--ul_end-->
                
                

                
            
            
        </div>
    <div class="hidden-sm hidden-xs hidden-xss pull-left md-car-characteristics">
        <dl class="dl-horizontal other-ads">
            
                <dt>Mileage</dt><dd>164000 Miles</dd>
            
            
                <dt class="">Transmission</dt><dd class="">Semi-Automatic</dd>
            
            
                <dt class="">Fuel Type</dt><dd class="">Diesel</dd>
            
            
            
            
            
            
                <dt class="bstyle-hidden">Body Style</dt><dd class="bstyle-hidden">Coupe</dd>
            
            
                <dt class="">Engine Size</dt><dd class="">3.0 L</dd>
            
            
                <dt class="doors-hidden">Doors</dt><dd class="doors-hidden">2 Door</dd>
            
            
            
            
            
                <dt>Location</dt><dd>Newtownabbey</dd>
            
            
            <dt class="hidden-xl hidden-lg monthly_price_hidden">
                Monthly Cost
            </dt>
            <dd class="hidden-xl hidden-lg monthly_price_hidden">
                
            </dd>
            <dt class="hidden-xl hidden-lg">
                Price
            </dt>
            <dd class="hidden-xl hidden-lg">
                
&pound;5,975
<div class="euroPrice hidden">5975</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>

            </dd>
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            

            
            
            

            

            

            
            
            

            
        </dl>
    </div>

        <div class="price-centered--wider hidden-md hidden-sm hidden-xs hidden-xss">
            <div class="car-price-left-block text-left">
                <script type="text/javascript">car_writeSoldTextResp('');</script>
            </div>
            <p class="monthly-cost-price monthly_price_hidden"></p>
            <div class="retail-price--small monthly_price_hidden">Retail:
                &pound;5,975</div>
            <div class="">
                
&pound;5,975
<div class="euroPrice hidden">5975</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>

            </div>
            
        </div>

        <div class="visible-md visible-lg visible-xl car-seller">
            
                
                <!--ul_begin--><img src="https://image.usedcarsni.com/user/000/028/170/844/16177121782406d7accb.svg"  class="img-responsive hq-logo-svg" alt="" /><!--ul_end-->
                
                

                
            
            
        </div>
    </div>
    
<a href="/2008-BMW-3-Series-335d-M-Sport-2dr-Auto-310305114?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1" class="btn more-button btn-warning hidden-sm hidden-xs hidden-xss" role="button">More Details</a>

</article><!-- WARNING: Automated extraction of vehicles is prohibited under the Terms of Use. --><article class="add-half-row overflowed-flex car-line ">
    <div class="car-caption visible-md">
        <div class="car-title overflowed-flex space-between">
            <div class="wrap-anywhere">
                <a href="/2014-BMW-3-Series-320d-EfficientDynamics-4dr-293806510?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1">
                    <strong class="wrap-anywhere">
                        <span class="visible-md-inline visible-sm-inline">2014</span> BMW 3 Series 320d  EfficientDynamics  4dr
                    </strong>
                </a>
            </div>
            <script type="text/javascript">showHeart(293806510, false, false);</script>
        </div>
        <p>
            
<span class="technical-subtitle">
                LOCAL OWNER, &pound; 20 TAX, PRIVACY, BLACK STYLING, 80. 7 MPG
                </span>

        </p>
    </div>
    <div class="car-img">
        
        <a href="/2014-BMW-3-Series-320d-EfficientDynamics-4dr-293806510?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1" title="View the details of this BMW 3 Series DIESEL SALOON in Tyrone" >
            <picture>
                <!--[if IE 9]><video class="hidden"><![endif]-->
                <source srcset="https://image.usedcarsni.com/photos/000/293/806/510/293814369.400.jpg/999999/2x 2x" sizes="100vw" media="(min-width: 760px)" type="image/jpeg" />
                <!--[if IE 9]></video><![endif]-->
                <img class="img-responsive" src="https://image.usedcarsni.com/photos/000/293/806/510/293814369.200.jpg/999999/1x" alt="BMW 3 Series DIESEL SALOON in Tyrone" />
                
                
                
<div class="photo-count-icon-cont 
photo-video-one-icon
 hidden-xss hidden-xs hidden-sm">
    
    
    
<div class="photo-icon 
photo-one-icon
">
<span class="glyphicon glyphicon-camera photo-count-icon"></span>
<div class="photo-count-count">24</div>
</div>

</div>

            </picture>
        </a>
        
        
    </div>
    <div class="car-description">
        <a href="/2014-BMW-3-Series-320d-EfficientDynamics-4dr-293806510?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1"
           class="car-description-overlay-link visible-xss visible-xs visible-sm"
        > </a>
        <div class="car-caption hidden-md">
            <div class="car-title overflowed-flex space-between">
                <div>
                    <a href="/2014-BMW-3-Series-320d-EfficientDynamics-4dr-293806510?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1">
                        <strong class="car-header overflowed">
                            <span class="visible-lg-inline visible-xl-inline">2014</span>
                            BMW 3 Series 320d  EfficientDynamics  4dr
                        </strong>
                    </a>
                </div>
                <div>
                    <script type="text/javascript">showHeart(293806510, false, false);</script>
                </div>
            </div>
            <p>
                
<span class="technical-subtitle">
                LOCAL OWNER, &pound; 20 TAX, PRIVACY, BLACK STYLING, 80. 7 MPG
                </span>

            </p>
        </div>
   <div class="car-short-info hidden-md hidden-lg hidden-xl overflowed">
            <div class="options-small">
            2014,
             </div>
            <div class="options-small">
            184000&nbsp;miles,
             </div>
            <div class="options-small ">
            Diesel,
             </div>
            <div class="options-small ">
            Manual,
             </div>
            <div class="options-small load-length-hidden"> </div>
            <div class="options-small load-height-hidden"> </div>
            <div class="options-small payload-hidden"> </div>
            <div class="options-small towing-weight-hidden"> </div>
            <div class="options-small bstyle-hidden">
            Saloon,
             </div>
            <div class="options-small ">
            2.0 L,
             </div>
            <div class="options-small doors-hidden">
            4 Door,
             </div>
            <div class="options-small tax-cost-hidden">
            &pound;20 Tax p.a.,
             </div>
            <div class="options-small">Cookstown</div>
            <div></div>
            

            

            

            

            

            

            

            

            

            

            

            

            
            

        </div>
        <div class="car-price car-price-half-container hidden-xss hidden-lg hidden-xl pull-right">
            <div class="car-price-left-block text-left">
                <script type="text/javascript">car_writeSoldTextResp('');</script>
            </div>
            <div class="car-price-right-block text-right hidden-md">
                <strong class="monthly_price_hidden"></strong>
                <p class="retail-price--small monthly_price_hidden">Retail:
                    &pound;5,990</p>
                <div class=""><strong>
&pound;5,990
<div class="euroPrice hidden">5990</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>
</strong></div>
                
                <div class="seller-block">
                    
                
                <!--ul_begin--><img src="https://image.usedcarsni.com/user/000/000/526/529/15731266518c24b28a9f.svg"  class="img-responsive hq-logo-svg" alt="" /><!--ul_end-->
                
                

                
            
                    
                </div>
            </div>
        </div>
        <div class="visible-xss car-price-half-container pull-right">
            <script type="text/javascript">car_writeSoldTextResp('');</script>
            <strong class="monthly_price_hidden"></strong>
            <p class="retail-price--small monthly_price_hidden">Retail:
                &pound;5,990</p>
            <div class=""><strong>
&pound;5,990
<div class="euroPrice hidden">5990</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>
</strong></div>
            <p class="euro-price--small" ></p>
            
                
                <!--ul_begin--><img src="https://image.usedcarsni.com/user/000/000/526/529/15731266518c24b28a9f.svg"  class="img-responsive hq-logo-svg" alt="" /><!--ul_end-->
                
                

                
            
            
        </div>
    <div class="hidden-sm hidden-xs hidden-xss pull-left md-car-characteristics">
        <dl class="dl-horizontal other-ads">
            
                <dt>Mileage</dt><dd>184000 Miles</dd>
            
            
                <dt class="">Transmission</dt><dd class="">Manual</dd>
            
            
                <dt class="">Fuel Type</dt><dd class="">Diesel</dd>
            
            
            
            
            
            
                <dt class="bstyle-hidden">Body Style</dt><dd class="bstyle-hidden">Saloon</dd>
            
            
                <dt class="">Engine Size</dt><dd class="">2.0 L</dd>
            
            
                <dt class="doors-hidden">Doors</dt><dd class="doors-hidden">4 Door</dd>
            
            
                <dt class="tax-cost-hidden">Standard Tax</dt><dd class="tax-cost-hidden">&pound;20 p.a.</dd>
            
            
            
            
                <dt>Location</dt><dd>Cookstown</dd>
            
            
            <dt class="hidden-xl hidden-lg monthly_price_hidden">
                Monthly Cost
            </dt>
            <dd class="hidden-xl hidden-lg monthly_price_hidden">
                
            </dd>
            <dt class="hidden-xl hidden-lg">
                Price
            </dt>
            <dd class="hidden-xl hidden-lg">
                
&pound;5,990
<div class="euroPrice hidden">5990</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>

            </dd>
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            

            
            
            

            

            

            
            
            

            
        </dl>
    </div>

        <div class="price-centered--wider hidden-md hidden-sm hidden-xs hidden-xss">
            <div class="car-price-left-block text-left">
                <script type="text/javascript">car_writeSoldTextResp('');</script>
            </div>
            <p class="monthly-cost-price monthly_price_hidden"></p>
            <div class="retail-price--small monthly_price_hidden">Retail:
                &pound;5,990</div>
            <div class="">
                
&pound;5,990
<div class="euroPrice hidden">5990</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>

            </div>
            
        </div>

        <div class="visible-md visible-lg visible-xl car-seller">
            
                
                <!--ul_begin--><img src="https://image.usedcarsni.com/user/000/000/526/529/15731266518c24b28a9f.svg"  class="img-responsive hq-logo-svg" alt="" /><!--ul_end-->
                
                

                
            
            
        </div>
    </div>
    
<a href="/2014-BMW-3-Series-320d-EfficientDynamics-4dr-293806510?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1" class="btn more-button btn-warning hidden-sm hidden-xs hidden-xss" role="button">More Details</a>

</article><!-- WARNING: Automated extraction of vehicles is prohibited under the Terms of Use. --><article class="add-half-row overflowed-flex car-line ">
    <div class="car-caption visible-md">
        <div class="car-title overflowed-flex space-between">
            <div class="wrap-anywhere">
                <a href="/2012-BMW-3-Series-320d-EfficientDynamics-4dr-Step-Auto-309726936?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1">
                    <strong class="wrap-anywhere">
                        <span class="visible-md-inline visible-sm-inline">Aug 2012</span> BMW 3 Series 320d  EfficientDynamics  4dr  Step  Auto
                    </strong>
                </a>
            </div>
            <script type="text/javascript">showHeart(309726936, false, false);</script>
        </div>
        <p>
            
<span class="technical-subtitle">
                FINANCE AVAILABLE / &pound; 20 PER YEAR ROAD TAX
                </span>

        </p>
    </div>
    <div class="car-img">
        
        <a href="/2012-BMW-3-Series-320d-EfficientDynamics-4dr-Step-Auto-309726936?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1" title="View the details of this BMW 3 Series DIESEL SALOON in Derry / Londonderry" >
            <picture>
                <!--[if IE 9]><video class="hidden"><![endif]-->
                <source srcset="https://image.usedcarsni.com/photos/000/309/726/936/309726945.400.jpg/999999/2x 2x" sizes="100vw" media="(min-width: 760px)" type="image/jpeg" />
                <!--[if IE 9]></video><![endif]-->
                <img class="img-responsive" src="https://image.usedcarsni.com/photos/000/309/726/936/309726945.200.jpg/999999/1x" alt="BMW 3 Series DIESEL SALOON in Derry / Londonderry" />
                
                
                
<div class="photo-count-icon-cont 
photo-video-one-icon
 hidden-xss hidden-xs hidden-sm">
    
    
    
<div class="photo-icon 
photo-one-icon
">
<span class="glyphicon glyphicon-camera photo-count-icon"></span>
<div class="photo-count-count">11</div>
</div>

</div>

            </picture>
        </a>
        
        
    </div>
    <div class="car-description">
        <a href="/2012-BMW-3-Series-320d-EfficientDynamics-4dr-Step-Auto-309726936?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1"
           class="car-description-overlay-link visible-xss visible-xs visible-sm"
        > </a>
        <div class="car-caption hidden-md">
            <div class="car-title overflowed-flex space-between">
                <div>
                    <a href="/2012-BMW-3-Series-320d-EfficientDynamics-4dr-Step-Auto-309726936?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1">
                        <strong class="car-header overflowed">
                            <span class="visible-lg-inline visible-xl-inline">Aug 2012</span>
                            BMW 3 Series 320d  EfficientDynamics  4dr  Step  Auto
                        </strong>
                    </a>
                </div>
                <div>
                    <script type="text/javascript">showHeart(309726936, false, false);</script>
                </div>
            </div>
            <p>
                
<span class="technical-subtitle">
                FINANCE AVAILABLE / &pound; 20 PER YEAR ROAD TAX
                </span>

            </p>
        </div>
   <div class="car-short-info hidden-md hidden-lg hidden-xl overflowed">
            <div class="options-small">
            Aug 2012,
             </div>
            <div class="options-small">
            142000&nbsp;miles,
             </div>
            <div class="options-small ">
            Diesel,
             </div>
            <div class="options-small ">
            Automatic,
             </div>
            <div class="options-small load-length-hidden"> </div>
            <div class="options-small load-height-hidden"> </div>
            <div class="options-small payload-hidden"> </div>
            <div class="options-small towing-weight-hidden"> </div>
            <div class="options-small bstyle-hidden">
            Saloon,
             </div>
            <div class="options-small ">
            2.0 L,
             </div>
            <div class="options-small doors-hidden">
            4 Door,
             </div>
            <div class="options-small tax-cost-hidden">
            &pound;20 Tax p.a.,
             </div>
            <div class="options-small">Coleraine</div>
            <div></div>
            

            

            

            

            

            

            

            

            

            

            

            

            
            

        </div>
        <div class="car-price car-price-half-container hidden-xss hidden-lg hidden-xl pull-right">
            <div class="car-price-left-block text-left">
                <script type="text/javascript">car_writeSoldTextResp('');</script>
            </div>
            <div class="car-price-right-block text-right hidden-md">
                <strong class="monthly_price_hidden"></strong>
                <p class="retail-price--small monthly_price_hidden">Retail:
                    &pound;5,995</p>
                <div class=""><strong>
&pound;5,995
<div class="euroPrice hidden">5995</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>
</strong></div>
                
                <div class="seller-block">
                    
                
                <!--ul_begin--><img src="https://image.usedcarsni.com/user/000/247/328/242/16010365131781ae5a2a.svg"  class="img-responsive hq-logo-svg" alt="" /><!--ul_end-->
                
                

                
            
                    
                </div>
            </div>
        </div>
        <div class="visible-xss car-price-half-container pull-right">
            <script type="text/javascript">car_writeSoldTextResp('');</script>
            <strong class="monthly_price_hidden"></strong>
            <p class="retail-price--small monthly_price_hidden">Retail:
                &pound;5,995</p>
            <div class=""><strong>
&pound;5,995
<div class="euroPrice hidden">5995</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>
</strong></div>
            <p class="euro-price--small" ></p>
            
                
                <!--ul_begin--><img src="https://image.usedcarsni.com/user/000/247/328/242/16010365131781ae5a2a.svg"  class="img-responsive hq-logo-svg" alt="" /><!--ul_end-->
                
                

                
            
            
        </div>
    <div class="hidden-sm hidden-xs hidden-xss pull-left md-car-characteristics">
        <dl class="dl-horizontal other-ads">
            
                <dt>Mileage</dt><dd>142000 Miles</dd>
            
            
                <dt class="">Transmission</dt><dd class="">Automatic</dd>
            
            
                <dt class="">Fuel Type</dt><dd class="">Diesel</dd>
            
            
            
            
            
            
                <dt class="bstyle-hidden">Body Style</dt><dd class="bstyle-hidden">Saloon</dd>
            
            
                <dt class="">Engine Size</dt><dd class="">2.0 L</dd>
            
            
                <dt class="doors-hidden">Doors</dt><dd class="doors-hidden">4 Door</dd>
            
            
                <dt class="tax-cost-hidden">Standard Tax</dt><dd class="tax-cost-hidden">&pound;20 p.a.</dd>
            
            
            
            
                <dt>Location</dt><dd>Coleraine</dd>
            
            
            <dt class="hidden-xl hidden-lg monthly_price_hidden">
                Monthly Cost
            </dt>
            <dd class="hidden-xl hidden-lg monthly_price_hidden">
                
            </dd>
            <dt class="hidden-xl hidden-lg">
                Price
            </dt>
            <dd class="hidden-xl hidden-lg">
                
&pound;5,995
<div class="euroPrice hidden">5995</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>

            </dd>
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            

            
            
            

            

            

            
            
            

            
        </dl>
    </div>

        <div class="price-centered--wider hidden-md hidden-sm hidden-xs hidden-xss">
            <div class="car-price-left-block text-left">
                <script type="text/javascript">car_writeSoldTextResp('');</script>
            </div>
            <p class="monthly-cost-price monthly_price_hidden"></p>
            <div class="retail-price--small monthly_price_hidden">Retail:
                &pound;5,995</div>
            <div class="">
                
&pound;5,995
<div class="euroPrice hidden">5995</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>

            </div>
            
        </div>

        <div class="visible-md visible-lg visible-xl car-seller">
            
                
                <!--ul_begin--><img src="https://image.usedcarsni.com/user/000/247/328/242/16010365131781ae5a2a.svg"  class="img-responsive hq-logo-svg" alt="" /><!--ul_end-->
                
                

                
            
            
        </div>
    </div>
    
<a href="/2012-BMW-3-Series-320d-EfficientDynamics-4dr-Step-Auto-309726936?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1" class="btn more-button btn-warning hidden-sm hidden-xs hidden-xss" role="button">More Details</a>

</article><!-- WARNING: Automated extraction of vehicles is prohibited under the Terms of Use. --><article class="add-half-row overflowed-flex car-line ">
    <div class="car-caption visible-md">
        <div class="car-title overflowed-flex space-between">
            <div class="wrap-anywhere">
                <a href="/2012-BMW-3-Series-320d-184-Sport-Plus-Edition-4dr-311762039?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1">
                    <strong class="wrap-anywhere">
                        <span class="visible-md-inline visible-sm-inline">Jan 2012</span> BMW 3 Series 320d  [184]  Sport  Plus  Edition  4dr
                    </strong>
                </a>
            </div>
            <script type="text/javascript">showHeart(311762039, false, false);</script>
        </div>
        <p>
            
<span class="technical-subtitle">
                (6 MONTHS WARRANTY)
                </span>

        </p>
    </div>
    <div class="car-img">
        
        <a href="/2012-BMW-3-Series-320d-184-Sport-Plus-Edition-4dr-311762039?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1" title="View the details of this BMW 3 Series DIESEL SALOON in Antrim" >
            <picture>
                <!--[if IE 9]><video class="hidden"><![endif]-->
                <source srcset="https://image.usedcarsni.com/photos/000/311/762/039/311767572.400.jpg/999999/2x 2x" sizes="100vw" media="(min-width: 760px)" type="image/jpeg" />
                <!--[if IE 9]></video><![endif]-->
                <img class="img-responsive" src="https://image.usedcarsni.com/photos/000/311/762/039/311767572.200.jpg/999999/1x" alt="BMW 3 Series DIESEL SALOON in Antrim" />
                
                
                
<div class="photo-count-icon-cont 
photo-video-one-icon
 hidden-xss hidden-xs hidden-sm">
    
    
    
<div class="photo-icon 
photo-one-icon
">
<span class="glyphicon glyphicon-camera photo-count-icon"></span>
<div class="photo-count-count">10</div>
</div>

</div>

            </picture>
        </a>
        
        
    </div>
    <div class="car-description">
        <a href="/2012-BMW-3-Series-320d-184-Sport-Plus-Edition-4dr-311762039?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1"
           class="car-description-overlay-link visible-xss visible-xs visible-sm"
        > </a>
        <div class="car-caption hidden-md">
            <div class="car-title overflowed-flex space-between">
                <div>
                    <a href="/2012-BMW-3-Series-320d-184-Sport-Plus-Edition-4dr-311762039?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1">
                        <strong class="car-header overflowed">
                            <span class="visible-lg-inline visible-xl-inline">Jan 2012</span>
                            BMW 3 Series 320d  [184]  Sport  Plus  Edition  4dr
                        </strong>
                    </a>
                </div>
                <div>
                    <script type="text/javascript">showHeart(311762039, false, false);</script>
                </div>
            </div>
            <p>
                
<span class="technical-subtitle">
                (6 MONTHS WARRANTY)
                </span>

            </p>
        </div>
   <div class="car-short-info hidden-md hidden-lg hidden-xl overflowed">
            <div class="options-small">
            Jan 2012,
             </div>
            <div class="options-small">
            120000&nbsp;miles,
             </div>
            <div class="options-small ">
            Diesel,
             </div>
            <div class="options-small ">
            Manual,
             </div>
            <div class="options-small load-length-hidden"> </div>
            <div class="options-small load-height-hidden"> </div>
            <div class="options-small payload-hidden"> </div>
            <div class="options-small towing-weight-hidden"> </div>
            <div class="options-small bstyle-hidden">
            Saloon,
             </div>
            <div class="options-small ">
            2.0 L,
             </div>
            <div class="options-small doors-hidden">
            4 Door,
             </div>
            <div class="options-small tax-cost-hidden">
            &pound;135 Tax p.a.,
             </div>
            <div class="options-small">Greenisland/carrickfergus</div>
            <div></div>
            

            

            

            

            

            

            

            

            

            

            

            

            
            

        </div>
        <div class="car-price car-price-half-container hidden-xss hidden-lg hidden-xl pull-right">
            <div class="car-price-left-block text-left">
                <script type="text/javascript">car_writeSoldTextResp('');</script>
            </div>
            <div class="car-price-right-block text-right hidden-md">
                <strong class="monthly_price_hidden"></strong>
                <p class="retail-price--small monthly_price_hidden">Retail:
                    &pound;5,995</p>
                <div class=""><strong>
&pound;5,995
<div class="euroPrice hidden">5995</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>
</strong></div>
                
                <div class="seller-block">
                    
                
                <!--ul_begin--><img src="https://image.usedcarsni.com/user/000/026/208/776/158201532392cd0871d5.svg"  class="img-responsive hq-logo-svg" alt="" /><!--ul_end-->
                
                

                
            
                    
                </div>
            </div>
        </div>
        <div class="visible-xss car-price-half-container pull-right">
            <script type="text/javascript">car_writeSoldTextResp('');</script>
            <strong class="monthly_price_hidden"></strong>
            <p class="retail-price--small monthly_price_hidden">Retail:
                &pound;5,995</p>
            <div class=""><strong>
&pound;5,995
<div class="euroPrice hidden">5995</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>
</strong></div>
            <p class="euro-price--small" ></p>
            
                
                <!--ul_begin--><img src="https://image.usedcarsni.com/user/000/026/208/776/158201532392cd0871d5.svg"  class="img-responsive hq-logo-svg" alt="" /><!--ul_end-->
                
                

                
            
            
        </div>
    <div class="hidden-sm hidden-xs hidden-xss pull-left md-car-characteristics">
        <dl class="dl-horizontal other-ads">
            
                <dt>Mileage</dt><dd>120000 Miles</dd>
            
            
                <dt class="">Transmission</dt><dd class="">Manual</dd>
            
            
                <dt class="">Fuel Type</dt><dd class="">Diesel</dd>
            
            
            
            
            
            
                <dt class="bstyle-hidden">Body Style</dt><dd class="bstyle-hidden">Saloon</dd>
            
            
                <dt class="">Engine Size</dt><dd class="">2.0 L</dd>
            
            
                <dt class="doors-hidden">Doors</dt><dd class="doors-hidden">4 Door</dd>
            
            
                <dt class="tax-cost-hidden">Standard Tax</dt><dd class="tax-cost-hidden">&pound;135 p.a.</dd>
            
            
            
            
                <dt>Location</dt><dd>Greenisland/carrickfergus</dd>
            
            
            <dt class="hidden-xl hidden-lg monthly_price_hidden">
                Monthly Cost
            </dt>
            <dd class="hidden-xl hidden-lg monthly_price_hidden">
                
            </dd>
            <dt class="hidden-xl hidden-lg">
                Price
            </dt>
            <dd class="hidden-xl hidden-lg">
                
&pound;5,995
<div class="euroPrice hidden">5995</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>

            </dd>
            
            
            
                <dt>Warranty</dt><dd>6 months</dd>
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            

            
            
            

            

            

            
            
            

            
        </dl>
    </div>

        <div class="price-centered--wider hidden-md hidden-sm hidden-xs hidden-xss">
            <div class="car-price-left-block text-left">
                <script type="text/javascript">car_writeSoldTextResp('');</script>
            </div>
            <p class="monthly-cost-price monthly_price_hidden"></p>
            <div class="retail-price--small monthly_price_hidden">Retail:
                &pound;5,995</div>
            <div class="">
                
&pound;5,995
<div class="euroPrice hidden">5995</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>

            </div>
            
        </div>

        <div class="visible-md visible-lg visible-xl car-seller">
            
                
                <!--ul_begin--><img src="https://image.usedcarsni.com/user/000/026/208/776/158201532392cd0871d5.svg"  class="img-responsive hq-logo-svg" alt="" /><!--ul_end-->
                
                

                
            
            
        </div>
    </div>
    
<a href="/2012-BMW-3-Series-320d-184-Sport-Plus-Edition-4dr-311762039?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1" class="btn more-button btn-warning hidden-sm hidden-xs hidden-xss" role="button">More Details</a>

</article><!-- WARNING: Automated extraction of vehicles is prohibited under the Terms of Use. --><article class="add-half-row overflowed-flex car-line ">
    <div class="car-caption visible-md">
        <div class="car-title overflowed-flex space-between">
            <div class="wrap-anywhere">
                <a href="/2010-BMW-3-Series-325d-204-SE-4dr-305465340?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1">
                    <strong class="wrap-anywhere">
                        <span class="visible-md-inline visible-sm-inline">Sep 2010</span> BMW 3 Series 325d  [204]  SE  4dr
                    </strong>
                </a>
            </div>
            <script type="text/javascript">showHeart(305465340, false, false);</script>
        </div>
        <p>
            
<span class="technical-subtitle">
                *Sorry Now Sold*
                </span>

        </p>
    </div>
    <div class="car-img">
        
        <a href="/2010-BMW-3-Series-325d-204-SE-4dr-305465340?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1" title="View the details of this BMW 3 Series DIESEL SALOON in Antrim" >
            <picture>
                <!--[if IE 9]><video class="hidden"><![endif]-->
                <source srcset="https://image.usedcarsni.com/photos/000/305/465/340/305465585.400.jpg/999999/2x 2x" sizes="100vw" media="(min-width: 760px)" type="image/jpeg" />
                <!--[if IE 9]></video><![endif]-->
                <img class="img-responsive" src="https://image.usedcarsni.com/photos/000/305/465/340/305465585.200.jpg/999999/1x" alt="BMW 3 Series DIESEL SALOON in Antrim" />
                
                
                
<div class="photo-count-icon-cont 
photo-video-one-icon
 hidden-xss hidden-xs hidden-sm">
    
    
    
<div class="photo-icon 
photo-one-icon
">
<span class="glyphicon glyphicon-camera photo-count-icon"></span>
<div class="photo-count-count">10</div>
</div>

</div>

            </picture>
        </a>
        
        
    </div>
    <div class="car-description">
        <a href="/2010-BMW-3-Series-325d-204-SE-4dr-305465340?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1"
           class="car-description-overlay-link visible-xss visible-xs visible-sm"
        > </a>
        <div class="car-caption hidden-md">
            <div class="car-title overflowed-flex space-between">
                <div>
                    <a href="/2010-BMW-3-Series-325d-204-SE-4dr-305465340?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1">
                        <strong class="car-header overflowed">
                            <span class="visible-lg-inline visible-xl-inline">Sep 2010</span>
                            BMW 3 Series 325d  [204]  SE  4dr
                        </strong>
                    </a>
                </div>
                <div>
                    <script type="text/javascript">showHeart(305465340, false, false);</script>
                </div>
            </div>
            <p>
                
<span class="technical-subtitle">
                *Sorry Now Sold*
                </span>

            </p>
        </div>
   <div class="car-short-info hidden-md hidden-lg hidden-xl overflowed">
            <div class="options-small">
            Sep 2010,
             </div>
            <div class="options-small">
            78850&nbsp;miles,
             </div>
            <div class="options-small ">
            Diesel,
             </div>
            <div class="options-small ">
            Manual,
             </div>
            <div class="options-small load-length-hidden"> </div>
            <div class="options-small load-height-hidden"> </div>
            <div class="options-small payload-hidden"> </div>
            <div class="options-small towing-weight-hidden"> </div>
            <div class="options-small bstyle-hidden">
            Saloon,
             </div>
            <div class="options-small ">
            3.0 L,
             </div>
            <div class="options-small doors-hidden">
            4 Door,
             </div>
            <div class="options-small tax-cost-hidden">
            &pound;220 Tax p.a.,
             </div>
            <div class="options-small">Lisburn</div>
            <div></div>
            

            

            

            

            

            

            

            

            

            

            

            

            
            

        </div>
        <div class="car-price car-price-half-container hidden-xss hidden-lg hidden-xl pull-right">
            <div class="car-price-left-block text-left">
                <script type="text/javascript">car_writeSoldTextResp('');</script>
            </div>
            <div class="car-price-right-block text-right hidden-md">
                <strong class="monthly_price_hidden"></strong>
                <p class="retail-price--small monthly_price_hidden">Retail:
                    &pound;6,250</p>
                <div class=""><strong>
&pound;6,250
<div class="euroPrice hidden">6250</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>
</strong></div>
                
                <div class="seller-block">
                    
                
                <!--ul_begin--><img src="https://image.usedcarsni.com/user/000/028/124/947/1569315552976149ce39.svg"  class="img-responsive hq-logo-svg" alt="" /><!--ul_end-->
                
                

                
            
                    
                </div>
            </div>
        </div>
        <div class="visible-xss car-price-half-container pull-right">
            <script type="text/javascript">car_writeSoldTextResp('');</script>
            <strong class="monthly_price_hidden"></strong>
            <p class="retail-price--small monthly_price_hidden">Retail:
                &pound;6,250</p>
            <div class=""><strong>
&pound;6,250
<div class="euroPrice hidden">6250</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>
</strong></div>
            <p class="euro-price--small" ></p>
            
                
                <!--ul_begin--><img src="https://image.usedcarsni.com/user/000/028/124/947/1569315552976149ce39.svg"  class="img-responsive hq-logo-svg" alt="" /><!--ul_end-->
                
                

                
            
            
        </div>
    <div class="hidden-sm hidden-xs hidden-xss pull-left md-car-characteristics">
        <dl class="dl-horizontal other-ads">
            
                <dt>Mileage</dt><dd>78850 Miles</dd>
            
            
                <dt class="">Transmission</dt><dd class="">Manual</dd>
            
            
                <dt class="">Fuel Type</dt><dd class="">Diesel</dd>
            
            
            
            
            
            
                <dt class="bstyle-hidden">Body Style</dt><dd class="bstyle-hidden">Saloon</dd>
            
            
                <dt class="">Engine Size</dt><dd class="">3.0 L</dd>
            
            
                <dt class="doors-hidden">Doors</dt><dd class="doors-hidden">4 Door</dd>
            
            
                <dt class="tax-cost-hidden">Standard Tax</dt><dd class="tax-cost-hidden">&pound;220 p.a.</dd>
            
            
            
            
                <dt>Location</dt><dd>Lisburn</dd>
            
            
            <dt class="hidden-xl hidden-lg monthly_price_hidden">
                Monthly Cost
            </dt>
            <dd class="hidden-xl hidden-lg monthly_price_hidden">
                
            </dd>
            <dt class="hidden-xl hidden-lg">
                Price
            </dt>
            <dd class="hidden-xl hidden-lg">
                
&pound;6,250
<div class="euroPrice hidden">6250</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>

            </dd>
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            

            
            
            

            

            

            
            
            

            
        </dl>
    </div>

        <div class="price-centered--wider hidden-md hidden-sm hidden-xs hidden-xss">
            <div class="car-price-left-block text-left">
                <script type="text/javascript">car_writeSoldTextResp('');</script>
            </div>
            <p class="monthly-cost-price monthly_price_hidden"></p>
            <div class="retail-price--small monthly_price_hidden">Retail:
                &pound;6,250</div>
            <div class="">
                
&pound;6,250
<div class="euroPrice hidden">6250</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>

            </div>
            
        </div>

        <div class="visible-md visible-lg visible-xl car-seller">
            
                
                <!--ul_begin--><img src="https://image.usedcarsni.com/user/000/028/124/947/1569315552976149ce39.svg"  class="img-responsive hq-logo-svg" alt="" /><!--ul_end-->
                
                

                
            
            
        </div>
    </div>
    
<a href="/2010-BMW-3-Series-325d-204-SE-4dr-305465340?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1" class="btn more-button btn-warning hidden-sm hidden-xs hidden-xss" role="button">More Details</a>

</article><!-- WARNING: Automated extraction of vehicles is prohibited under the Terms of Use. --><article class="add-half-row overflowed-flex car-line ">
    <div class="car-caption visible-md">
        <div class="car-title overflowed-flex space-between">
            <div class="wrap-anywhere">
                <a href="/2012-BMW-3-Series-320d-Sport-4dr-311649494?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1">
                    <strong class="wrap-anywhere">
                        <span class="visible-md-inline visible-sm-inline">Jun 2012</span> BMW 3 Series 320d  Sport  4dr
                    </strong>
                </a>
            </div>
            <script type="text/javascript">showHeart(311649494, false, false);</script>
        </div>
        <p>
            
        </p>
    </div>
    <div class="car-img">
        
        <a href="/2012-BMW-3-Series-320d-Sport-4dr-311649494?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1" title="View the details of this BMW 3 Series DIESEL SALOON in Tyrone" >
            <picture>
                <!--[if IE 9]><video class="hidden"><![endif]-->
                <source srcset="https://image.usedcarsni.com/photos/000/311/649/494/311649503.400.jpg/999999/2x 2x" sizes="100vw" media="(min-width: 760px)" type="image/jpeg" />
                <!--[if IE 9]></video><![endif]-->
                <img class="img-responsive" src="https://image.usedcarsni.com/photos/000/311/649/494/311649503.200.jpg/999999/1x" alt="BMW 3 Series DIESEL SALOON in Tyrone" />
                
                
                
<div class="photo-count-icon-cont 
photo-video-one-icon
 hidden-xss hidden-xs hidden-sm">
    
    
    
<div class="photo-icon 
photo-one-icon
">
<span class="glyphicon glyphicon-camera photo-count-icon"></span>
<div class="photo-count-count">8</div>
</div>

</div>

            </picture>
        </a>
        
        
    </div>
    <div class="car-description">
        <a href="/2012-BMW-3-Series-320d-Sport-4dr-311649494?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1"
           class="car-description-overlay-link visible-xss visible-xs visible-sm"
        > </a>
        <div class="car-caption hidden-md">
            <div class="car-title overflowed-flex space-between">
                <div>
                    <a href="/2012-BMW-3-Series-320d-Sport-4dr-311649494?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1">
                        <strong class="car-header overflowed">
                            <span class="visible-lg-inline visible-xl-inline">Jun 2012</span>
                            BMW 3 Series 320d  Sport  4dr
                        </strong>
                    </a>
                </div>
                <div>
                    <script type="text/javascript">showHeart(311649494, false, false);</script>
                </div>
            </div>
            <p>
                
            </p>
        </div>
   <div class="car-short-info hidden-md hidden-lg hidden-xl overflowed">
            <div class="options-small">
            Jun 2012,
             </div>
            <div class="options-small">
            134000&nbsp;miles,
             </div>
            <div class="options-small ">
            Diesel,
             </div>
            <div class="options-small ">
            Manual,
             </div>
            <div class="options-small load-length-hidden"> </div>
            <div class="options-small load-height-hidden"> </div>
            <div class="options-small payload-hidden"> </div>
            <div class="options-small towing-weight-hidden"> </div>
            <div class="options-small bstyle-hidden">
            Saloon,
             </div>
            <div class="options-small ">
            2.0 L,
             </div>
            <div class="options-small doors-hidden">
            4 Door,
             </div>
            <div class="options-small tax-cost-hidden">
            &pound;30 Tax p.a.,
             </div>
            <div class="options-small">Omagh</div>
            <div></div>
            

            

            

            

            

            

            

            

            

            

            

            

            
            

        </div>
        <div class="car-price car-price-half-container hidden-xss hidden-lg hidden-xl pull-right">
            <div class="car-price-left-block text-left">
                <script type="text/javascript">car_writeSoldTextResp('');</script>
            </div>
            <div class="car-price-right-block text-right hidden-md">
                <strong class="monthly_price_hidden"></strong>
                <p class="retail-price--small monthly_price_hidden">Retail:
                    &pound;6,250</p>
                <div class=""><strong>
&pound;6,250
<div class="euroPrice hidden">6250</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>
</strong></div>
                
                <div class="seller-block">
                    
                
                <!--ul_begin--><img src="https://image.usedcarsni.com/user/000/203/310/297/1597911962a9f237640a.svg"  class="img-responsive hq-logo-svg" alt="" /><!--ul_end-->
                
                

                
            
                    
                </div>
            </div>
        </div>
        <div class="visible-xss car-price-half-container pull-right">
            <script type="text/javascript">car_writeSoldTextResp('');</script>
            <strong class="monthly_price_hidden"></strong>
            <p class="retail-price--small monthly_price_hidden">Retail:
                &pound;6,250</p>
            <div class=""><strong>
&pound;6,250
<div class="euroPrice hidden">6250</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>
</strong></div>
            <p class="euro-price--small" ></p>
            
                
                <!--ul_begin--><img src="https://image.usedcarsni.com/user/000/203/310/297/1597911962a9f237640a.svg"  class="img-responsive hq-logo-svg" alt="" /><!--ul_end-->
                
                

                
            
            
        </div>
    <div class="hidden-sm hidden-xs hidden-xss pull-left md-car-characteristics">
        <dl class="dl-horizontal other-ads">
            
                <dt>Mileage</dt><dd>134000 Miles</dd>
            
            
                <dt class="">Transmission</dt><dd class="">Manual</dd>
            
            
                <dt class="">Fuel Type</dt><dd class="">Diesel</dd>
            
            
            
            
            
            
                <dt class="bstyle-hidden">Body Style</dt><dd class="bstyle-hidden">Saloon</dd>
            
            
                <dt class="">Engine Size</dt><dd class="">2.0 L</dd>
            
            
                <dt class="doors-hidden">Doors</dt><dd class="doors-hidden">4 Door</dd>
            
            
                <dt class="tax-cost-hidden">Standard Tax</dt><dd class="tax-cost-hidden">&pound;30 p.a.</dd>
            
            
            
            
                <dt>Location</dt><dd>Omagh</dd>
            
            
            <dt class="hidden-xl hidden-lg monthly_price_hidden">
                Monthly Cost
            </dt>
            <dd class="hidden-xl hidden-lg monthly_price_hidden">
                
            </dd>
            <dt class="hidden-xl hidden-lg">
                Price
            </dt>
            <dd class="hidden-xl hidden-lg">
                
&pound;6,250
<div class="euroPrice hidden">6250</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>

            </dd>
            
            
            
                <dt>Warranty</dt><dd>3 months</dd>
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            

            
            
            

            

            

            
            
            

            
        </dl>
    </div>

        <div class="price-centered--wider hidden-md hidden-sm hidden-xs hidden-xss">
            <div class="car-price-left-block text-left">
                <script type="text/javascript">car_writeSoldTextResp('');</script>
            </div>
            <p class="monthly-cost-price monthly_price_hidden"></p>
            <div class="retail-price--small monthly_price_hidden">Retail:
                &pound;6,250</div>
            <div class="">
                
&pound;6,250
<div class="euroPrice hidden">6250</div>
<script type="text/javascript">car_writeSoldTextResp('');</script>

            </div>
            
        </div>

        <div class="visible-md visible-lg visible-xl car-seller">
            
                
                <!--ul_begin--><img src="https://image.usedcarsni.com/user/000/203/310/297/1597911962a9f237640a.svg"  class="img-responsive hq-logo-svg" alt="" /><!--ul_end-->
                
                

                
            
            
        </div>
    </div>
    
<a href="/2012-BMW-3-Series-320d-Sport-4dr-311649494?make=2&model=139959&keywords=&fuel_type=0&trans_type=0&age_from=0&age_to=0&price_from=0&price_to=0&user_type=0&mileage_to=0&body_style=0&distance_enabled=0&distance_postcode=&homepage_search_attr=1&tab_id=0&search_type=1" class="btn more-button btn-warning hidden-sm hidden-xs hidden-xss" role="button">More Details</a>

</article>
            
            <div class="hidden-xss hidden-xs hidden-sm">
                <div class="text-left search-results-control">
                    
                    <a href="/search_results.php?make=2&model=139959&search_type=11&vehicle_type=1&age_from=0&age_to=0&body_style=0&distance_enabled=0&distance_postcode=&fuel_type=0&homepage_search_attr=1&keywords=&mileage_to=0&price_from=0&price_to=0&tab_id=0&trans_type=0&user_type=0&vehicle_condition=2">
                        3 damaged repairables
                    </a>
                    match your criteria
                    
                    
                </div>
                <div class="text-right search-results-control">
                    
                    <a href="/search_results.php?make=2&model=139959&search_type=1&age_from=0&age_to=0&body_style=0&distance_enabled=0&distance_postcode=&fuel_type=0&homepage_search_attr=1&keywords=&mileage_to=0&price_from=0&price_to=0&priced_only=1&tab_id=0&trans_type=0&user_type=0">Hide Unpriced cars</a>
                    
                    
                    
                    <span class="text-muted">&nbsp;|&nbsp;</span>
                    
                    
                    <a href="/search_results.php?make=2&model=139959&search_type=1&age_from=0&age_to=0&body_style=0&distance_enabled=0&distance_postcode=&fuel_type=0&has_photo_only=1&homepage_search_attr=1&keywords=&mileage_to=0&price_from=0&price_to=0&tab_id=0&trans_type=0&user_type=0">Hide Cars Without Images</a>
                    
                    
                </div>
            </div>
        </div>
    </div>
    
    <nav class="navbar navbar-static-top title-bar">
        <div class="navbar-text pull-left title-bar-title-bottom hidden-xss hidden-xs hidden-sm">
            
                1 to 20 of 360
            
            
        </div>
        <div class="navbar-form no-padding pull-right title-bar-controls">
            <ul class="navbar-navigation pagination text-center hidden-xss hidden-xs hidden-sm">
    
<li class="active"><a href="/search_results.php?make=2&model=139959&search_type=1&age_from=0&age_to=0&body_style=0&distance_enabled=0&distance_postcode=&fuel_type=0&homepage_search_attr=1&keywords=&mileage_to=0&pagepc0=1&price_from=0&price_to=0&tab_id=0&trans_type=0&user_type=0">1</a></li>

<li><a href="/search_results.php?make=2&model=139959&search_type=1&age_from=0&age_to=0&body_style=0&distance_enabled=0&distance_postcode=&fuel_type=0&homepage_search_attr=1&keywords=&mileage_to=0&pagepc0=2&price_from=0&price_to=0&tab_id=0&trans_type=0&user_type=0">2</a></li>

<li><a href="/search_results.php?make=2&model=139959&search_type=1&age_from=0&age_to=0&body_style=0&distance_enabled=0&distance_postcode=&fuel_type=0&homepage_search_attr=1&keywords=&mileage_to=0&pagepc0=3&price_from=0&price_to=0&tab_id=0&trans_type=0&user_type=0">3</a></li>

<li><a href="/search_results.php?make=2&model=139959&search_type=1&age_from=0&age_to=0&body_style=0&distance_enabled=0&distance_postcode=&fuel_type=0&homepage_search_attr=1&keywords=&mileage_to=0&pagepc0=4&price_from=0&price_to=0&tab_id=0&trans_type=0&user_type=0">4</a></li>

<li><a href="/search_results.php?make=2&model=139959&search_type=1&age_from=0&age_to=0&body_style=0&distance_enabled=0&distance_postcode=&fuel_type=0&homepage_search_attr=1&keywords=&mileage_to=0&pagepc0=5&price_from=0&price_to=0&tab_id=0&trans_type=0&user_type=0">5</a></li>

<li><a href="/search_results.php?make=2&model=139959&search_type=1&age_from=0&age_to=0&body_style=0&distance_enabled=0&distance_postcode=&fuel_type=0&homepage_search_attr=1&keywords=&mileage_to=0&pagepc0=2&price_from=0&price_to=0&tab_id=0&trans_type=0&user_type=0">Next</a></li>

</ul>
<div class="ul-center-align">
    <ul class="navbar-navigation mobile-pagination pagination text-center hidden-md hidden-lg hidden-xl">
        
<li class="active"><a href="/search_results.php?make=2&model=139959&search_type=1&age_from=0&age_to=0&body_style=0&distance_enabled=0&distance_postcode=&fuel_type=0&homepage_search_attr=1&keywords=&mileage_to=0&pagepc0=1&price_from=0&price_to=0&tab_id=0&trans_type=0&user_type=0">1</a></li>

<li><a href="/search_results.php?make=2&model=139959&search_type=1&age_from=0&age_to=0&body_style=0&distance_enabled=0&distance_postcode=&fuel_type=0&homepage_search_attr=1&keywords=&mileage_to=0&pagepc0=2&price_from=0&price_to=0&tab_id=0&trans_type=0&user_type=0">2</a></li>

<li><a href="/search_results.php?make=2&model=139959&search_type=1&age_from=0&age_to=0&body_style=0&distance_enabled=0&distance_postcode=&fuel_type=0&homepage_search_attr=1&keywords=&mileage_to=0&pagepc0=3&price_from=0&price_to=0&tab_id=0&trans_type=0&user_type=0">3</a></li>

<li><a href="/search_results.php?make=2&model=139959&search_type=1&age_from=0&age_to=0&body_style=0&distance_enabled=0&distance_postcode=&fuel_type=0&homepage_search_attr=1&keywords=&mileage_to=0&pagepc0=4&price_from=0&price_to=0&tab_id=0&trans_type=0&user_type=0">4</a></li>

<li><a href="/search_results.php?make=2&model=139959&search_type=1&age_from=0&age_to=0&body_style=0&distance_enabled=0&distance_postcode=&fuel_type=0&homepage_search_attr=1&keywords=&mileage_to=0&pagepc0=5&price_from=0&price_to=0&tab_id=0&trans_type=0&user_type=0">5</a></li>

<li><a href="/search_results.php?make=2&model=139959&search_type=1&age_from=0&age_to=0&body_style=0&distance_enabled=0&distance_postcode=&fuel_type=0&homepage_search_attr=1&keywords=&mileage_to=0&pagepc0=2&price_from=0&price_to=0&tab_id=0&trans_type=0&user_type=0">Next</a></li>

    </ul>
</div>
        </div>
        
        <div class="navbar-form no-padding pull-right title-bar-controls hidden-sm hidden-xs hidden-xss">
            <select class="form-control bg-default navbar-btn search-order" onChange="document.location = '/search_results.php?make=2&model=139959&search_type=1&age_from=0&age_to=0&body_style=0&distance_enabled=0&distance_postcode=&fuel_type=0&homepage_search_attr=1&keywords=&mileage_to=0&price_from=0&price_to=0&tab_id=0&trans_type=0&user_type=0&sortby=' + this.value;">
                <option value="18|1" selected>Price low to high</option><option value="6|0" >Price high to low</option><option value="19|1" >Mileage low to high</option><option value="12|0" >Most recently added</option>
            </select>
        </div>
        
    </nav>
    
    
</div>

<div>
    <div class="col-lg-12">
        <div class="insurance-block">
            <h4 class="insurance-block-title"></h4>
            <div class="insurance-block-internal">
                
                <div class="finance-buttons finance-buttons geo-item">
                    <div class="insurance-button-top">
                        <a  id="" class="insurance-button-top-123" href="https://compareni.quotezone.co.uk/SetAffiliate.php?aid=N8T0P0-001&type=car&kw=searchresults&reg=0&estimatedvalue=#EstimatedValue" target='_new' title="Insurance Quotes" 
                onClick="stat_counter('52', '', 'https://www.usedcarsni.com/')"
                >
                            <img src="https://image.usedcarsni.com/geo_menu_item/1/000/084/266/588/16708849011b570746a1.svg" alt="" class="" />
                        </a>
                    </div>
                    <div class="insurance-button-bottom">
                        <a  id="" class="" href="https://compareni.quotezone.co.uk/SetAffiliate.php?aid=N8T0P0-001&type=car&kw=searchresults&reg=0&estimatedvalue=#EstimatedValue" target='_new' title="Insurance Quotes" 
                onClick="stat_counter('52', '', 'https://www.usedcarsni.com/')"
                >
                            Insurance Quotes
                        </a>
                    </div>
                </div>
                
                <div class="finance-buttons finance-buttons geo-item">
                    <div class="insurance-button-top">
                        <a  id="" class="insurance-button-top-123" href="https://usedcarsni.carmoney.co.uk/car-finance-calculator?utm_source=usedcarsni&utm_medium=display&utm_content=search_results_text" target='_new' title="Finance Quotes" 
                onClick="stat_counter('324', '', 'https://www.usedcarsni.com/')"
                >
                            <img src="https://image.usedcarsni.com/geo_menu_item/1/000/087/433/953/16708849138c89324b8a.svg" alt="" class="" />
                        </a>
                    </div>
                    <div class="insurance-button-bottom">
                        <a  id="" class="" href="https://usedcarsni.carmoney.co.uk/car-finance-calculator?utm_source=usedcarsni&utm_medium=display&utm_content=search_results_text" target='_new' title="Finance Quotes" 
                onClick="stat_counter('324', '', 'https://www.usedcarsni.com/')"
                >
                            Finance Quotes
                        </a>
                    </div>
                </div>
                
                <div class="finance-buttons finance-buttons geo-item">
                    <div class="insurance-button-top">
                        <a  id="" class="insurance-button-top-123" href="https://www.best4warranty.com/usedcarsni/?utm_source=Car-Warranty&utm_medium=Leaderboard&utm_campaign=Click&utm_id=UsedCarsNI" target='_new' title="" 
                onClick="stat_counter('336', '', 'https://www.usedcarsni.com/')"
                >
                            <img src="https://image.usedcarsni.com/geo_menu_item/1/000/178/361/643/167088449816b437d6b7.svg" alt="" class="" />
                        </a>
                    </div>
                    <div class="insurance-button-bottom">
                        <a  id="" class="" href="https://www.best4warranty.com/usedcarsni/?utm_source=Car-Warranty&utm_medium=Leaderboard&utm_campaign=Click&utm_id=UsedCarsNI" target='_new' title="" 
                onClick="stat_counter('336', '', 'https://www.usedcarsni.com/')"
                >
                            Warranty Quotes
                        </a>
                    </div>
                </div>
                
                
                <div class="finance-buttons-alert finance-buttons geo-item finance-button-vehicle-alert">
                    <div class="insurance-button-top">
                        <a class="insurance-button-top-123" href="/get_updates">
                            <img src="/images/Alerts.png" class="">
                        </a>
                    </div>
                    <div class="insurance-button-bottom">
                        <a href="/get_updates" class="insurance-button-bottom-123">
                            Set a Vehicle Alert
                        </a>
                    </div>
                </div>
                
            </div>
        </div>

    </div>
    
    <div class="col-lg-12 alert-btn-container">
        <div class="vehicle-alerts-container vehicle-alerts-container-left">
            <img src="/images/Alerts.png" class="vehicle-alerts-image">
        </div>
        <div class="vehicle-alerts-container vehicle-alerts-container-middle">
            <p class="alert-txt-title"></p>
            <p class="alert-txt"></p>
        </div>
        <div class="vehicle-alerts-container vehicle-alerts-container-right">
            <a href="/get_updates" class="btn-warning btn view-location-button bell-btn vehicle-alerts-btn">
                Set a Vehicle Alert
            </a>
        </div>
    </div>
    
</div>


<div id="USE_D_Search_Bottom" class="bottom-banner banner-desktop"></div>
<div id="USE_M_Search_Bottom" class="banner-centered-content add-half-row banner-mobile"></div>



<hr class="form-line__grey" style="margin-top:30px;"/>
<div class="col-xl-14 col-lg-12 col-md-10 col-sm-8 col-xs-12 col-xss-12 add-inner-height euroHint hidden">
    *
</div>
<div class="clearfix"></div>
</main>



<footer>
    <div class="navbar navbar-grey navbar-static-top hidden-lg hidden-xl hidden-md" style="padding: 0 10px;">
        <div class="navbar-text black-links" style="overflow: hidden;">
            <div class="col-xss-12 col-xs-12 col-sm-push-2 col-sm-2 add-one-row">
                <a href="/">Home</a><br/><br/>
                <a href="/cms/car_add.php">Sell Your Vehicle</a><br/><br/>
                <a href="/directory">Directory</a><br/><br/>
                <a href="/reviews">Car Reviews</a>
            </div>
            <div class="visible-sm footer-categories-divider"></div>
            <div class="col-xss-12 col-xs-12 col-sm-push-2 col-sm-2">
                <a href="/part_finder_search.php">Part Finder</a><br/><br/>
                <a href="/mystocklist.php">Showroom</a><br/><br/>
                <a href="/login_page.php">Login</a><br/><br/>
            </div>
        </div>
        <hr/>
        <div class="nav-center navbar-text">
            <a href="/about-us" class="text-muted">About</a>
            <span class="text-muted footer-about-divider">&nbsp;|&nbsp;</span>
            <a href="http://blog.usedcarsni.com" class="text-muted">Blog</a>
            <span class="text-muted footer-about-divider">&nbsp;|&nbsp;</span>
            <a href="/terms_of_use.php" class="text-muted">Terms</a>
        </div>
        <div class="nav-center navbar-text">
            <span class="text-muted">&copy; 2022 Used Cars NI Ltd<br type="_moz" /></span>
        </div>
    </div>
    <div class="col-md-10 col-lg-12 col-xl-14 no-padding hidden-sm hidden-xs hidden-xss">
        
        <div class="car-makes">
            <div class="footer_links">Popular Searches For BMW 3 Series Northern Ireland</div><div class="footer_links">BMW 3 Series Northern Ireland by Year : <a class="footer-dark-text" href="/search_results.php?make=2&model=139959&search_type=1&age_from=2005&age_to=2005" title="2005 BMW 3 Series" target='_top'>2005</a>
 | 
<a class="footer-dark-text" href="/search_results.php?make=2&model=139959&search_type=1&age_from=2006&age_to=2006" title="2006 BMW 3 Series" target='_top'>2006</a>
 | 
<a class="footer-dark-text" href="/search_results.php?make=2&model=139959&search_type=1&age_from=2007&age_to=2007" title="2007 BMW 3 Series" target='_top'>2007</a>
 | 
<a class="footer-dark-text" href="/search_results.php?make=2&model=139959&search_type=1&age_from=2008&age_to=2008" title="2008 BMW 3 Series" target='_top'>2008</a>
 | 
<a class="footer-dark-text" href="/search_results.php?make=2&model=139959&search_type=1&age_from=2009&age_to=2009" title="2009 BMW 3 Series" target='_top'>2009</a>
 | 
<a class="footer-dark-text" href="/search_results.php?make=2&model=139959&search_type=1&age_from=2010&age_to=2010" title="2010 BMW 3 Series" target='_top'>2010</a>
 | 
<a class="footer-dark-text" href="/search_results.php?make=2&model=139959&search_type=1&age_from=2011&age_to=2011" title="2011 BMW 3 Series" target='_top'>2011</a>
 | 
<a class="footer-dark-text" href="/search_results.php?make=2&model=139959&search_type=1&age_from=2012&age_to=2012" title="2012 BMW 3 Series" target='_top'>2012</a>
 | 
<a class="footer-dark-text" href="/search_results.php?make=2&model=139959&search_type=1&age_from=2013&age_to=2013" title="2013 BMW 3 Series" target='_top'>2013</a>
 | 
<a class="footer-dark-text" href="/search_results.php?make=2&model=139959&search_type=1&age_from=2014&age_to=2014" title="2014 BMW 3 Series" target='_top'>2014</a>
 | 
<a class="footer-dark-text" href="/search_results.php?make=2&model=139959&search_type=1&age_from=2015&age_to=2015" title="2015 BMW 3 Series" target='_top'>2015</a>
 | 
<a class="footer-dark-text" href="/search_results.php?make=2&model=139959&search_type=1&age_from=2016&age_to=2016" title="2016 BMW 3 Series" target='_top'>2016</a>
 | 
<a class="footer-dark-text" href="/search_results.php?make=2&model=139959&search_type=1&age_from=2017&age_to=2017" title="2017 BMW 3 Series" target='_top'>2017</a>
 | 
<a class="footer-dark-text" href="/search_results.php?make=2&model=139959&search_type=1&age_from=2018&age_to=2018" title="2018 BMW 3 Series" target='_top'>2018</a>
 | 
<a class="footer-dark-text" href="/search_results.php?make=2&model=139959&search_type=1&age_from=2019&age_to=2019" title="2019 BMW 3 Series" target='_top'>2019</a>
 | 
<a class="footer-dark-text" href="/search_results.php?make=2&model=139959&search_type=1&age_from=2020&age_to=2020" title="2020 BMW 3 Series" target='_top'>2020</a>
 | 
<a class="footer-dark-text" href="/search_results.php?make=2&model=139959&search_type=1&age_from=2021&age_to=2021" title="2021 BMW 3 Series" target='_top'>2021</a>
 | 
<a class="footer-dark-text" href="/search_results.php?make=2&model=139959&search_type=1&age_from=2022&age_to=2022" title="2022 BMW 3 Series" target='_top'>2022</a></div><div class="footer_links">BMW 3 Series Northern Ireland by Price : <a class="footer-dark-text" href="/search_results.php?make=2&model=139959&search_type=1&price_to=5000" title="BMW 3 Series Under &pound;5000" target='_top'>Under &pound;5000</a>
 | 
<a class="footer-dark-text" href="/search_results.php?make=2&model=139959&search_type=1&price_to=10000" title="BMW 3 Series Under &pound;10000" target='_top'>Under &pound;10000</a>
 | 
<a class="footer-dark-text" href="/search_results.php?make=2&model=139959&search_type=1&price_to=15000" title="BMW 3 Series Under &pound;15000" target='_top'>Under &pound;15000</a>
 | 
<a class="footer-dark-text" href="/search_results.php?make=2&model=139959&search_type=1&price_to=20000" title="BMW 3 Series Under &pound;20000" target='_top'>Under &pound;20000</a></div><div class="footer_links">BMW 3 Series Northern Ireland by Transmission : <a class="footer-dark-text" href="/search_results.php?make=2&model=139959&search_type=1&trans_type=1" title="BMW 3 Series Manual" target='_top'>Manual</a>
 | 
<a class="footer-dark-text" href="/search_results.php?make=2&model=139959&search_type=1&trans_type=2" title="BMW 3 Series Automatic" target='_top'>Automatic</a></div><div class="footer_links">BMW 3 Series Northern Ireland by Class : <a class="footer-dark-text" href="/search_results.php?make=2&model=139959&search_type=1&car_class=27" title="BMW 3 Series Executive / Luxury" target='_top'>Executive / Luxury</a>
 | 
<a class="footer-dark-text" href="/search_results.php?make=2&model=139959&search_type=1&car_class=26" title="BMW 3 Series Large Family Car" target='_top'>Large Family Car</a></div><div class="footer_links">BMW 3 Series Northern Ireland by Location : <a class="footer-dark-text" href="/browse_by_location.php?make=2&model=139959&search_type=1&distance_enabled=1&distance_miles=10&distance_postcode=BT60+4EZ&geo_area=16&keywords=Armagh&location[]=0&location[]=0" title="BMW 3 Series Armagh">Armagh</a>
 | 
<a class="footer-dark-text" href="/browse_by_location.php?make=2&model=139959&search_type=1&distance_enabled=1&distance_miles=10&distance_postcode=BT43+6AH&geo_area=7&keywords=Ballymena&location[]=0&location[]=0" title="BMW 3 Series Ballymena">Ballymena</a>
 | 
<a class="footer-dark-text" href="/browse_by_location.php?make=2&model=139959&search_type=1&distance_enabled=1&distance_miles=10&distance_postcode=BT38+9AH+&geo_area=10&keywords=Carrickfergus&location[]=0&location[]=0" title="BMW 3 Series Carrickfergus">Carrickfergus</a>
 | 
<a class="footer-dark-text" href="/browse_by_location.php?make=2&model=139959&search_type=1&distance_enabled=&distance_miles=&distance_postcode=&geo_area=22&keywords=&location[]=88" title="BMW 3 Series Down">Down</a>
 | 
<a class="footer-dark-text" href="/browse_by_location.php?make=2&model=139959&search_type=1&distance_enabled=&distance_miles=&distance_postcode=&geo_area=23&keywords=&location[]=85" title="BMW 3 Series Fermanagh">Fermanagh</a>
 | 
<a class="footer-dark-text" href="/browse_by_location.php?make=2&model=139959&search_type=1&distance_enabled=1&distance_miles=10&distance_postcode=BT28+1AN&geo_area=3&keywords=Lisburn&location[]=0&location[]=0" title="BMW 3 Series Lisburn">Lisburn</a>
 | 
<a class="footer-dark-text" href="/browse_by_location.php?make=2&model=139959&search_type=1&distance_enabled=1&distance_miles=10&distance_postcode=BT34+2QU&geo_area=9&keywords=Newry&location[]=0&location[]=0" title="BMW 3 Series Newry">Newry</a></div>
        </div>
        
    </div>
    <div class="add-row"></div>
    <section class="text-center footer-dark-text footer-warning">
        <br /><div align="center">	<font size="2">Used Cars NI can take no responsibility for any errors which may appear in listings. Please confirm details with the seller when making an enquiry.</font></div><div class="text-center text-muted copyright">	<span style="font-size: 11px;">Usedcarsni.com is a credit broker (not a lender), authorised and regulated by the Financial Conduct Authority (FRN 735212). Used Cars NI Ltd, 88 Lisburn Road, Belfast, BT9 6AF.</span></div>
    </section>
</footer>


<script type="text/javascript" src="/responsive/js/bootstrap.min.js"></script>
<script type="text/javascript" src="/responsive/js/bootstrap-vs-jquery-fix.js"></script>
<script type="text/javascript" src="/responsive/js/custom-carousel.js"></script>
<div style="display:none;" id="leaderboard-loading-removed-RM1018">
    
</div>
<div style="display:none;" id="leaderboard-loading-mobile-removed-RM1018">
    
</div>
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-8603372-1"></script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-8603372-1');
gtag('config', 'AW-1021169754')
</script>

<script type="text/javascript" src="https://api.visitor.chat/js/vc.min.js" id="vcLoaderScript"></script>


</body>
</html>`

const regex = /"([^"]*&search_type=1[^"]*)"/g;

let matches = pagecontent.match(regex);
matches = [...new Set(matches)];


const baseURL = 'https://usedcarsni.com';
const urls = matches.map(match => baseURL + match.replace('"', '')).filter(url => url.indexOf(".php") === -1);

console.log(urls.length + " URLs");
fs.writeFileSync('urls.txt', urls.join('\n'));

const getUrlsFromPage = (baseURL, pageContent) => {
    const regex = /"([^"]*&search_type=1[^"]*)"/g;

    let matches = pageContent.match(regex);
    matches = [...new Set(matches)];


    const baseURL = 'https://usedcarsni.com';
    const urls = matches.map(match => baseURL + match.replace('"', '')).filter(url => url.indexOf(".php") === -1);
    return urls;
}