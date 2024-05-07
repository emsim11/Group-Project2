// DOM Element References
const HomeBtn = document.getElementById('Return-To-Homepage');
const HoursLabel = document.getElementById('Hours');
const MinutesLabel = document.getElementById('Minutes');
const SecondsLabel = document.getElementById('Seconds');
const TimerStartBtn = document.getElementById('Timer-Start-Button');
const TimerStopBtn = document.getElementById('Timer-Stop-Button');
const TimerClearBtn = document.getElementById('Timer-Clear-Button')
const UserInput = document.getElementById('User-Input');
const SearchButton = document.getElementById('Search-Button');
const ResultsDiv = document.getElementById('Results');

// Functions: Return to Homepage
HomeBtn.addEventListener('click', function() {
    window.location.href = '/homepage';
});

// Functions: Workout Timer
(function() {
    let TotalSeconds = 0;
    let Timer = null;
    
    TimerStartBtn.addEventListener('click', function() {
        if (!Timer) {
            Timer = setInterval(setTime, 1000);
        }
    });
  
    TimerStopBtn.addEventListener('click', function() {
        if (Timer) {
            clearInterval(Timer);
            Timer = null;
        }
    });

    TimerClearBtn.addEventListener('click', function() {
        TotalSeconds = 0;
        clearInterval(Timer);
        Timer = null;
        SecondsLabel.innerHTML = "00";
        MinutesLabel.innerHTML = "00";
        HoursLabel.innerHTML = "00";
    });

    function setTime() {
      TotalSeconds++;
      SecondsLabel.innerHTML = pad(TotalSeconds % 60);
      MinutesLabel.innerHTML = pad(parseInt(TotalSeconds / 60));
      HoursLabel.innerHTML = pad(parseInt(TotalSeconds / 3600))
    }
  
    function pad(val) {
      var valString = val + "";
      if (valString.length < 2) {
        return "0" + valString;
      } else {
        return valString;
      }
    }
  
})();

// Functions: Gemini Google AI
const API_KEY = 'AIzaSyDM9h_H6uJNcWntAN4e30DTWXICQr-NggI';
import { GoogleGenerativeAI } from '@google/generative-ai';
const GenAI = new GoogleGenerativeAI(API_KEY);

async function run() {
    console.log('Gemini Google AI API is Running');
    
    SearchButton.addEventListener('click', async () => {
        const Model = GenAI.getGenerativeModel({ model: 'gemini-pro' });
        const Prompt = UserInput.value;

        const Result = await Model.generateContent(Prompt);
        const Response = await Result.response;
        const Text = Response.text();
        
        const ResultElement = document.createElement('div');
        ResultElement.innerHTML = `<p>${Text}</p>`;
        ResultsDiv.innerHTML = '';
        ResultsDiv.appendChild(ResultElement);
    });
}

run();