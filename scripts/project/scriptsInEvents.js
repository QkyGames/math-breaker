var isGamePaused = 0;


var imported = document.createElement('script');
var AdsenseId = "ca-pub-9737420423828962"
var ChannelId = "4014177645"
var adFrequency = "30s";
var testAdsOn = false;

window.adsbygoogle = window.adsbygoogle || [];
var adBreak;
var adConfig;

function loadAdSetup()
{
	
	adBreak = function(o) {adsbygoogle.push(o);}
	adConfig = function(o) {adsbygoogle.push(o);}
	adConfig({
    preloadAdBreaks: 'on',
    sound: 'on', // This game has sound
    onReady: () => {
        
    }, // Called when API has initialised and adBreak() is ready
});

}
function nextAds()
{
    
    adBreak({
        type: 'start', // ad shows at start of next level
        name: 'start-game',
        beforeAd: () => {            
            
			isGamePaused = 1;
        }, // You may also want to mute thegame's sound.
        afterAd: () => {
            
			isGamePaused = 0;
        }, // resume the game flow.
        adBreakDone: (placementInfo) => {
            
			isGamePaused = 0;
            
        },
    });
}

function showReward()
{
    
    adBreak({
        type: 'reward', // ad shows at start of next level
        name: 'rewarded Ad',
        beforeAd: () => {            
            
			isGamePaused = 1;
        }, // You may also want to mute thegame's sound.
        afterAd: () => {
            
			isGamePaused = 0;
        }, // resume the game flow.
        beforeReward: (showAdFn) => {console.log("beforeReward ")+showAdFn(0)},
        adDismissed: () => {console.log("adDismissed");},
        adViewed: () => {console.log("adViewed");},
        adBreakDone: (placementInfo) => {
            
			isGamePaused = 0;
            
            if(placementInfo.breakStatus == "frequencyCapped"){updateTextRewardPanel()};
        },
    });
}
function updateTextRewardPanel()
{
    console.log("updateTextRewardPanel")
}

function createAFGScript()
{
console.log("createAFGScript " + testAdsOn)
    imported.setAttribute('data-ad-client', AdsenseId);
    imported.setAttribute('data-ad-channel', ChannelId);
    imported.setAttribute('data-ad-frequency-hint', adFrequency);
    if(testAdsOn == true){imported.setAttribute('data-adbreak-test', "on");}
    imported.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
    imported.setAttribute("type", "text/javascript");
    imported.async = true;
    document.head.appendChild(imported);
}

createAFGScript()
loadAdSetup()



const scriptsInEvents = {

	async Eqkyads_Event5_Act1(runtime, localVars)
	{
		
		nextAds()
		
	},

	async Eqkyads_Event6_Act1(runtime, localVars)
	{
		runtime.globalVars["isPausedGame"] = isGamePaused;
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

