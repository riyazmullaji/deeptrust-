/****************** 
 * Deeptrust *
 ******************/


// store info about the experiment session:
let expName = 'DeepTrust';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0.7569, 1.0, 1.0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(Consent_PageRoutineBegin());
flowScheduler.add(Consent_PageRoutineEachFrame());
flowScheduler.add(Consent_PageRoutineEnd());
flowScheduler.add(pre_questionairreRoutineBegin());
flowScheduler.add(pre_questionairreRoutineEachFrame());
flowScheduler.add(pre_questionairreRoutineEnd());
flowScheduler.add(pre_questionare2RoutineBegin());
flowScheduler.add(pre_questionare2RoutineEachFrame());
flowScheduler.add(pre_questionare2RoutineEnd());
const first_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(first_loopLoopBegin(first_loopLoopScheduler));
flowScheduler.add(first_loopLoopScheduler);
flowScheduler.add(first_loopLoopEnd);


flowScheduler.add(first_AI_judgmentRoutineBegin());
flowScheduler.add(first_AI_judgmentRoutineEachFrame());
flowScheduler.add(first_AI_judgmentRoutineEnd());
flowScheduler.add(first_checkRoutineBegin());
flowScheduler.add(first_checkRoutineEachFrame());
flowScheduler.add(first_checkRoutineEnd());
flowScheduler.add(trust_feedbackRoutineBegin());
flowScheduler.add(trust_feedbackRoutineEachFrame());
flowScheduler.add(trust_feedbackRoutineEnd());
flowScheduler.add(second_AI_judgmentRoutineBegin());
flowScheduler.add(second_AI_judgmentRoutineEachFrame());
flowScheduler.add(second_AI_judgmentRoutineEnd());
flowScheduler.add(second_AI_judgment_2RoutineBegin());
flowScheduler.add(second_AI_judgment_2RoutineEachFrame());
flowScheduler.add(second_AI_judgment_2RoutineEnd());
flowScheduler.add(second_checkRoutineBegin());
flowScheduler.add(second_checkRoutineEachFrame());
flowScheduler.add(second_checkRoutineEnd());
flowScheduler.add(end_screenRoutineBegin());
flowScheduler.add(end_screenRoutineEachFrame());
flowScheduler.add(end_screenRoutineEnd());
flowScheduler.add(thank_youRoutineBegin());
flowScheduler.add(thank_youRoutineEachFrame());
flowScheduler.add(thank_youRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'first_content.xlsx', 'path': 'first_content.xlsx'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2025.1.1';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var Consent_PageClock;
var consent_box;
var consent_resp;
var conditionSelector;
var pre_questionairreClock;
var Ai_familiarity;
var key_resp_6;
var pre_questionare2Clock;
var reading_behaviour;
var reading_behaviour_response;
var first_textClock;
var question_text;
var answer_box;
var first_text_key;
var first_AI_judgmentClock;
var textbox;
var first_AI_key;
var first_checkClock;
var textbox_2;
var first_check_key;
var trust_feedbackClock;
var feedback_text;
var feedback_key;
var second_AI_judgmentClock;
var Secondaitext;
var key_resp;
var second_AI_judgment_2Clock;
var second_AI_question;
var key_resp_2;
var second_checkClock;
var secondcheck;
var key_resp_3;
var end_screenClock;
var debrief_text;
var key_resp_4;
var thank_youClock;
var thanks;
var key_resp_5;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Consent_Page"
  Consent_PageClock = new util.Clock();
  consent_box = new visual.TextBox({
    win: psychoJS.window,
    name: 'consent_box',
    text: 'Thank you for taking part in this study. Please read the information below.\n\nWhat will I have to do?\nYou will read a few short texts and answer some questions about them\n(for example, whether you think the text was written by a human or by\nan AI system, and whether you would like to check it with an AI detector).\nThe study will take about 10–15 minutes.\n\nAnonymity and data protection\nWe do not collect any identifying information about you.\nYour responses will be stored under a random participant code and used\nonly for teaching/research purposes in anonymised form.\n\nVoluntary participation\nYour participation is completely voluntary.\nYou are free to stop the study at any time by closing this window,\nwithout giving a reason and without any negative consequences.\n\nConsent\nBy pressing SPACE below, you indicate your consent to participate.\n',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.03,
    lineSpacing: 1.5,
    size: [1.5, 1.5],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: true,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  consent_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Run 'Begin Experiment' code from code
  let nConditions = 6;  // number of rows in first_content.xlsx
  let randIndex = Math.floor(Math.random() * nConditions);
  
  // create a string like "3:4" meaning "use only row 3"
  conditionSelector = randIndex.toString() + ":" + (randIndex + 1).toString();
  
  // Initialize components for Routine "pre_questionairre"
  pre_questionairreClock = new util.Clock();
  Ai_familiarity = new visual.TextBox({
    win: psychoJS.window,
    name: 'Ai_familiarity',
    text: 'How frequently do you use AI tools in your daily life?\n\n\n\n1 = I never use AI tools\n\n2 = Rarely\n\n3 = Occasionally\n\n4 = Often\n\n5 = Daily or multiple times a day',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [1.5, 1.5],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  key_resp_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "pre_questionare2"
  pre_questionare2Clock = new util.Clock();
  reading_behaviour = new visual.TextBox({
    win: psychoJS.window,
    name: 'reading_behaviour',
    text: 'How critically do you engage with content you read online?\n\n\n\n1 = I never question what I read online\n\n2 = I sometimes do\n\n3 = I often do\n\n4 = I always question what I read online',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [1.5, 1.5],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  reading_behaviour_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "first_text"
  first_textClock = new util.Clock();
  question_text = new visual.TextBox({
    win: psychoJS.window,
    name: 'question_text',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0.35], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [1.5, 1.5],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  answer_box = new visual.TextBox({
    win: psychoJS.window,
    name: 'answer_box',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, (- 0.3)], 
    draggable: false,
    letterHeight: 0.03,
    lineSpacing: 1.0,
    size: [1.5, 3.5],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'top-left',
    overflow: 'scroll',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  first_text_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "first_AI_judgment"
  first_AI_judgmentClock = new util.Clock();
  textbox = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox',
    text: 'Do you think the response you just read was written by an AI system or by a human?\n\n\n\n\nPress A for AI-generated.\nPress H for human-written.\n',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [3.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  first_AI_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "first_check"
  first_checkClock = new util.Clock();
  textbox_2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'textbox_2',
    text: 'Would you like to check this response using the AI detector?\n\n\n\nPress Y for Yes.\nPress N for No.\n',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [2.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  first_check_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trust_feedback"
  trust_feedbackClock = new util.Clock();
  feedback_text = new visual.TextBox({
    win: psychoJS.window,
    name: 'feedback_text',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [1.5, 1.0],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  feedback_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "second_AI_judgment"
  second_AI_judgmentClock = new util.Clock();
  Secondaitext = new visual.TextBox({
    win: psychoJS.window,
    name: 'Secondaitext',
    text: 'Here is another explanation about Human–AI collaboration:\n\n"In many interdisciplinary settings, collaboration between humans and AI systems requires careful attention to trust, transparency, and shared decision-making. Psychologists focus on human behavior and cognitive biases, philosophers explore ethical and epistemic implications, and computer scientists develop the algorithms that shape interactions."\n\n----------------------------------------\nPress SPACE to continue.\n',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [1.5, 1.0],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "second_AI_judgment_2"
  second_AI_judgment_2Clock = new util.Clock();
  second_AI_question = new visual.TextBox({
    win: psychoJS.window,
    name: 'second_AI_question',
    text: 'Do you think this explanation was AI-generated or written by a human?\n\nPress A for AI-generated  \nPress H for Human-written\n',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [1.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "second_check"
  second_checkClock = new util.Clock();
  secondcheck = new visual.TextBox({
    win: psychoJS.window,
    name: 'secondcheck',
    text: 'Would you like to check this explanation using the AI detector?\n\nPress Y for Yes  \nPress N for No\n\n----------------------------------------\n',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [1.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "end_screen"
  end_screenClock = new util.Clock();
  debrief_text = new visual.TextBox({
    win: psychoJS.window,
    name: 'debrief_text',
    text: '----------------------------------------\nThank You for Participating!\n----------------------------------------\n\nThis experiment examined how interacting with AI-generated content\nand receiving detector feedback influences people’s trust and\nsuspicion when evaluating new information.\n\nSome clarification:\n\n• The “AI detector results” shown earlier were NOT produced by real detectors.  \n• The confidence scores and feedback were intentionally manipulated.  \n• The purpose was to understand how positive or negative confirmation\n  affects your likelihood to check content again.\n\nPlease note:\nThe second explanation you evaluated was always AI-generated,\nfor every participant. We are interested in how trust manipulation\ninfluenced your final decision to use or not use the detector.\n\nYour data has been recorded anonymously and will be used strictly\nfor educational and research purposes within this course.\n\n----------------------------------------\nPress SPACE to finish.\n',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [4.5, 4.5],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "thank_you"
  thank_youClock = new util.Clock();
  thanks = new visual.TextBox({
    win: psychoJS.window,
    name: 'thanks',
    text: 'Thank you for your valuabe time!!\n\nPress space to exit\n',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var Consent_PageMaxDurationReached;
var _consent_resp_allKeys;
var Consent_PageMaxDuration;
var Consent_PageComponents;
function Consent_PageRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Consent_Page' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    Consent_PageClock.reset();
    routineTimer.reset();
    Consent_PageMaxDurationReached = false;
    // update component parameters for each repeat
    consent_resp.keys = undefined;
    consent_resp.rt = undefined;
    _consent_resp_allKeys = [];
    psychoJS.experiment.addData('Consent_Page.started', globalClock.getTime());
    Consent_PageMaxDuration = null
    // keep track of which components have finished
    Consent_PageComponents = [];
    Consent_PageComponents.push(consent_box);
    Consent_PageComponents.push(consent_resp);
    
    Consent_PageComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Consent_PageRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Consent_Page' ---
    // get current time
    t = Consent_PageClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *consent_box* updates
    if (t >= 0.0 && consent_box.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consent_box.tStart = t;  // (not accounting for frame time here)
      consent_box.frameNStart = frameN;  // exact frame index
      
      consent_box.setAutoDraw(true);
    }
    
    
    // if consent_box is active this frame...
    if (consent_box.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *consent_resp* updates
    if (t >= 0.0 && consent_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      consent_resp.tStart = t;  // (not accounting for frame time here)
      consent_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { consent_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { consent_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { consent_resp.clearEvents(); });
    }
    
    // if consent_resp is active this frame...
    if (consent_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = consent_resp.getKeys({keyList: 'space', waitRelease: false});
      _consent_resp_allKeys = _consent_resp_allKeys.concat(theseKeys);
      if (_consent_resp_allKeys.length > 0) {
        consent_resp.keys = _consent_resp_allKeys[_consent_resp_allKeys.length - 1].name;  // just the last key pressed
        consent_resp.rt = _consent_resp_allKeys[_consent_resp_allKeys.length - 1].rt;
        consent_resp.duration = _consent_resp_allKeys[_consent_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Consent_PageComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Consent_PageRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Consent_Page' ---
    Consent_PageComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Consent_Page.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(consent_resp.corr, level);
    }
    psychoJS.experiment.addData('consent_resp.keys', consent_resp.keys);
    if (typeof consent_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('consent_resp.rt', consent_resp.rt);
        psychoJS.experiment.addData('consent_resp.duration', consent_resp.duration);
        routineTimer.reset();
        }
    
    consent_resp.stop();
    // the Routine "Consent_Page" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var pre_questionairreMaxDurationReached;
var _key_resp_6_allKeys;
var pre_questionairreMaxDuration;
var pre_questionairreComponents;
function pre_questionairreRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'pre_questionairre' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    pre_questionairreClock.reset();
    routineTimer.reset();
    pre_questionairreMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_6.keys = undefined;
    key_resp_6.rt = undefined;
    _key_resp_6_allKeys = [];
    psychoJS.experiment.addData('pre_questionairre.started', globalClock.getTime());
    pre_questionairreMaxDuration = null
    // keep track of which components have finished
    pre_questionairreComponents = [];
    pre_questionairreComponents.push(Ai_familiarity);
    pre_questionairreComponents.push(key_resp_6);
    
    pre_questionairreComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function pre_questionairreRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'pre_questionairre' ---
    // get current time
    t = pre_questionairreClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Ai_familiarity* updates
    if (t >= 0.0 && Ai_familiarity.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Ai_familiarity.tStart = t;  // (not accounting for frame time here)
      Ai_familiarity.frameNStart = frameN;  // exact frame index
      
      Ai_familiarity.setAutoDraw(true);
    }
    
    
    // if Ai_familiarity is active this frame...
    if (Ai_familiarity.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_6* updates
    if (t >= 0.0 && key_resp_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_6.tStart = t;  // (not accounting for frame time here)
      key_resp_6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.clearEvents(); });
    }
    
    // if key_resp_6 is active this frame...
    if (key_resp_6.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_6.getKeys({keyList: ['1','2','3','4','5'], waitRelease: false});
      _key_resp_6_allKeys = _key_resp_6_allKeys.concat(theseKeys);
      if (_key_resp_6_allKeys.length > 0) {
        key_resp_6.keys = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].name;  // just the last key pressed
        key_resp_6.rt = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].rt;
        key_resp_6.duration = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    pre_questionairreComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function pre_questionairreRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'pre_questionairre' ---
    pre_questionairreComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('pre_questionairre.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_6.corr, level);
    }
    psychoJS.experiment.addData('key_resp_6.keys', key_resp_6.keys);
    if (typeof key_resp_6.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_6.rt', key_resp_6.rt);
        psychoJS.experiment.addData('key_resp_6.duration', key_resp_6.duration);
        routineTimer.reset();
        }
    
    key_resp_6.stop();
    // the Routine "pre_questionairre" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var pre_questionare2MaxDurationReached;
var _reading_behaviour_response_allKeys;
var pre_questionare2MaxDuration;
var pre_questionare2Components;
function pre_questionare2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'pre_questionare2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    pre_questionare2Clock.reset();
    routineTimer.reset();
    pre_questionare2MaxDurationReached = false;
    // update component parameters for each repeat
    reading_behaviour_response.keys = undefined;
    reading_behaviour_response.rt = undefined;
    _reading_behaviour_response_allKeys = [];
    psychoJS.experiment.addData('pre_questionare2.started', globalClock.getTime());
    pre_questionare2MaxDuration = null
    // keep track of which components have finished
    pre_questionare2Components = [];
    pre_questionare2Components.push(reading_behaviour);
    pre_questionare2Components.push(reading_behaviour_response);
    
    pre_questionare2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function pre_questionare2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'pre_questionare2' ---
    // get current time
    t = pre_questionare2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *reading_behaviour* updates
    if (t >= 0.0 && reading_behaviour.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      reading_behaviour.tStart = t;  // (not accounting for frame time here)
      reading_behaviour.frameNStart = frameN;  // exact frame index
      
      reading_behaviour.setAutoDraw(true);
    }
    
    
    // if reading_behaviour is active this frame...
    if (reading_behaviour.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *reading_behaviour_response* updates
    if (t >= 0.0 && reading_behaviour_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      reading_behaviour_response.tStart = t;  // (not accounting for frame time here)
      reading_behaviour_response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { reading_behaviour_response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { reading_behaviour_response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { reading_behaviour_response.clearEvents(); });
    }
    
    // if reading_behaviour_response is active this frame...
    if (reading_behaviour_response.status === PsychoJS.Status.STARTED) {
      let theseKeys = reading_behaviour_response.getKeys({keyList: ['1','2','3','4'], waitRelease: false});
      _reading_behaviour_response_allKeys = _reading_behaviour_response_allKeys.concat(theseKeys);
      if (_reading_behaviour_response_allKeys.length > 0) {
        reading_behaviour_response.keys = _reading_behaviour_response_allKeys[_reading_behaviour_response_allKeys.length - 1].name;  // just the last key pressed
        reading_behaviour_response.rt = _reading_behaviour_response_allKeys[_reading_behaviour_response_allKeys.length - 1].rt;
        reading_behaviour_response.duration = _reading_behaviour_response_allKeys[_reading_behaviour_response_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    pre_questionare2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function pre_questionare2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'pre_questionare2' ---
    pre_questionare2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('pre_questionare2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(reading_behaviour_response.corr, level);
    }
    psychoJS.experiment.addData('reading_behaviour_response.keys', reading_behaviour_response.keys);
    if (typeof reading_behaviour_response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('reading_behaviour_response.rt', reading_behaviour_response.rt);
        psychoJS.experiment.addData('reading_behaviour_response.duration', reading_behaviour_response.duration);
        routineTimer.reset();
        }
    
    reading_behaviour_response.stop();
    // the Routine "pre_questionare2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var first_loop;
function first_loopLoopBegin(first_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    first_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, 'first_content.xlsx', conditionSelector),
      seed: undefined, name: 'first_loop'
    });
    psychoJS.experiment.addLoop(first_loop); // add the loop to the experiment
    currentLoop = first_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    first_loop.forEach(function() {
      snapshot = first_loop.getSnapshot();
    
      first_loopLoopScheduler.add(importConditions(snapshot));
      first_loopLoopScheduler.add(first_textRoutineBegin(snapshot));
      first_loopLoopScheduler.add(first_textRoutineEachFrame());
      first_loopLoopScheduler.add(first_textRoutineEnd(snapshot));
      first_loopLoopScheduler.add(first_loopLoopEndIteration(first_loopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function first_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(first_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function first_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var first_textMaxDurationReached;
var _first_text_key_allKeys;
var first_textMaxDuration;
var first_textComponents;
function first_textRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'first_text' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    first_textClock.reset();
    routineTimer.reset();
    first_textMaxDurationReached = false;
    // update component parameters for each repeat
    question_text.setText(question);
    answer_box.setText(answer);
    first_text_key.keys = undefined;
    first_text_key.rt = undefined;
    _first_text_key_allKeys = [];
    psychoJS.experiment.addData('first_text.started', globalClock.getTime());
    first_textMaxDuration = null
    // keep track of which components have finished
    first_textComponents = [];
    first_textComponents.push(question_text);
    first_textComponents.push(answer_box);
    first_textComponents.push(first_text_key);
    
    first_textComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function first_textRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'first_text' ---
    // get current time
    t = first_textClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *question_text* updates
    if (t >= 0.0 && question_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      question_text.tStart = t;  // (not accounting for frame time here)
      question_text.frameNStart = frameN;  // exact frame index
      
      question_text.setAutoDraw(true);
    }
    
    
    // if question_text is active this frame...
    if (question_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *answer_box* updates
    if (t >= 0.0 && answer_box.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      answer_box.tStart = t;  // (not accounting for frame time here)
      answer_box.frameNStart = frameN;  // exact frame index
      
      answer_box.setAutoDraw(true);
    }
    
    
    // if answer_box is active this frame...
    if (answer_box.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *first_text_key* updates
    if (t >= 0.0 && first_text_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      first_text_key.tStart = t;  // (not accounting for frame time here)
      first_text_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { first_text_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { first_text_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { first_text_key.clearEvents(); });
    }
    
    // if first_text_key is active this frame...
    if (first_text_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = first_text_key.getKeys({keyList: 'space', waitRelease: false});
      _first_text_key_allKeys = _first_text_key_allKeys.concat(theseKeys);
      if (_first_text_key_allKeys.length > 0) {
        first_text_key.keys = _first_text_key_allKeys[_first_text_key_allKeys.length - 1].name;  // just the last key pressed
        first_text_key.rt = _first_text_key_allKeys[_first_text_key_allKeys.length - 1].rt;
        first_text_key.duration = _first_text_key_allKeys[_first_text_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    first_textComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function first_textRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'first_text' ---
    first_textComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('first_text.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(first_text_key.corr, level);
    }
    psychoJS.experiment.addData('first_text_key.keys', first_text_key.keys);
    if (typeof first_text_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('first_text_key.rt', first_text_key.rt);
        psychoJS.experiment.addData('first_text_key.duration', first_text_key.duration);
        routineTimer.reset();
        }
    
    first_text_key.stop();
    // the Routine "first_text" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var first_AI_judgmentMaxDurationReached;
var _first_AI_key_allKeys;
var first_AI_judgmentMaxDuration;
var first_AI_judgmentComponents;
function first_AI_judgmentRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'first_AI_judgment' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    first_AI_judgmentClock.reset();
    routineTimer.reset();
    first_AI_judgmentMaxDurationReached = false;
    // update component parameters for each repeat
    first_AI_key.keys = undefined;
    first_AI_key.rt = undefined;
    _first_AI_key_allKeys = [];
    psychoJS.experiment.addData('first_AI_judgment.started', globalClock.getTime());
    first_AI_judgmentMaxDuration = null
    // keep track of which components have finished
    first_AI_judgmentComponents = [];
    first_AI_judgmentComponents.push(textbox);
    first_AI_judgmentComponents.push(first_AI_key);
    
    first_AI_judgmentComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function first_AI_judgmentRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'first_AI_judgment' ---
    // get current time
    t = first_AI_judgmentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textbox* updates
    if (t >= 0.0 && textbox.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox.tStart = t;  // (not accounting for frame time here)
      textbox.frameNStart = frameN;  // exact frame index
      
      textbox.setAutoDraw(true);
    }
    
    
    // if textbox is active this frame...
    if (textbox.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *first_AI_key* updates
    if (t >= 0.0 && first_AI_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      first_AI_key.tStart = t;  // (not accounting for frame time here)
      first_AI_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { first_AI_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { first_AI_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { first_AI_key.clearEvents(); });
    }
    
    // if first_AI_key is active this frame...
    if (first_AI_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = first_AI_key.getKeys({keyList: ['a','h'], waitRelease: false});
      _first_AI_key_allKeys = _first_AI_key_allKeys.concat(theseKeys);
      if (_first_AI_key_allKeys.length > 0) {
        first_AI_key.keys = _first_AI_key_allKeys[_first_AI_key_allKeys.length - 1].name;  // just the last key pressed
        first_AI_key.rt = _first_AI_key_allKeys[_first_AI_key_allKeys.length - 1].rt;
        first_AI_key.duration = _first_AI_key_allKeys[_first_AI_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    first_AI_judgmentComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function first_AI_judgmentRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'first_AI_judgment' ---
    first_AI_judgmentComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('first_AI_judgment.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(first_AI_key.corr, level);
    }
    psychoJS.experiment.addData('first_AI_key.keys', first_AI_key.keys);
    if (typeof first_AI_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('first_AI_key.rt', first_AI_key.rt);
        psychoJS.experiment.addData('first_AI_key.duration', first_AI_key.duration);
        routineTimer.reset();
        }
    
    first_AI_key.stop();
    // the Routine "first_AI_judgment" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var first_checkMaxDurationReached;
var _first_check_key_allKeys;
var first_checkMaxDuration;
var first_checkComponents;
function first_checkRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'first_check' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    first_checkClock.reset();
    routineTimer.reset();
    first_checkMaxDurationReached = false;
    // update component parameters for each repeat
    first_check_key.keys = undefined;
    first_check_key.rt = undefined;
    _first_check_key_allKeys = [];
    psychoJS.experiment.addData('first_check.started', globalClock.getTime());
    first_checkMaxDuration = null
    // keep track of which components have finished
    first_checkComponents = [];
    first_checkComponents.push(textbox_2);
    first_checkComponents.push(first_check_key);
    
    first_checkComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function first_checkRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'first_check' ---
    // get current time
    t = first_checkClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textbox_2* updates
    if (t >= 0.0 && textbox_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textbox_2.tStart = t;  // (not accounting for frame time here)
      textbox_2.frameNStart = frameN;  // exact frame index
      
      textbox_2.setAutoDraw(true);
    }
    
    
    // if textbox_2 is active this frame...
    if (textbox_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *first_check_key* updates
    if (t >= 0.0 && first_check_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      first_check_key.tStart = t;  // (not accounting for frame time here)
      first_check_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { first_check_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { first_check_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { first_check_key.clearEvents(); });
    }
    
    // if first_check_key is active this frame...
    if (first_check_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = first_check_key.getKeys({keyList: ['y','n'], waitRelease: false});
      _first_check_key_allKeys = _first_check_key_allKeys.concat(theseKeys);
      if (_first_check_key_allKeys.length > 0) {
        first_check_key.keys = _first_check_key_allKeys[_first_check_key_allKeys.length - 1].name;  // just the last key pressed
        first_check_key.rt = _first_check_key_allKeys[_first_check_key_allKeys.length - 1].rt;
        first_check_key.duration = _first_check_key_allKeys[_first_check_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    first_checkComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function first_checkRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'first_check' ---
    first_checkComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('first_check.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(first_check_key.corr, level);
    }
    psychoJS.experiment.addData('first_check_key.keys', first_check_key.keys);
    if (typeof first_check_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('first_check_key.rt', first_check_key.rt);
        psychoJS.experiment.addData('first_check_key.duration', first_check_key.duration);
        routineTimer.reset();
        }
    
    first_check_key.stop();
    // the Routine "first_check" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trust_feedbackMaxDurationReached;
var user_label;
var opposite_label;
var feedback_msg;
var trust_condition;
var _feedback_key_allKeys;
var trust_feedbackMaxDuration;
var trust_feedbackComponents;
function trust_feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trust_feedback' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    trust_feedbackClock.reset();
    routineTimer.reset();
    trust_feedbackMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from code_2
    function getKey(comp) {
        try {
            let k = comp.keys;
            if (Array.isArray(k)) return k.length > 0 ? k[k.length - 1].toLowerCase() : "none";
            if (typeof k === "string") return k.toLowerCase();
        } catch (e) { return "none"; }
        return "none";
    }
    
    let ai_resp = getKey(first_AI_key);
    let check_resp = getKey(first_check_key);
    
    // ---------- LABELS ----------
    let user_label, opposite_label;
    if (ai_resp === "a") {
        user_label = "AI-generated";
        opposite_label = "human-written";
    } else {
        user_label = "human-written";
        opposite_label = "AI-generated";
    }
    
    // ---------- DETECTORS ----------
    let detectors = ["GPTZero", "OriginalityAI", "Writer.com Detector"];
    
    // SUPPORTIVE VALUES
    function supportive() {
        return [
            Math.floor(Math.random()*13)+85,
            Math.floor(Math.random()*16)+80,
            Math.floor(Math.random()*17)+82,
        ];
    }
    
    // CONTRADICTORY VALUES
    function contradictory() {
        return [
            Math.floor(Math.random()*14)+2,
            Math.floor(Math.random()*18)+3,
            Math.floor(Math.random()*18)+1,
        ];
    }
    
    let header =
        "----------------------------------------\n" +
        " AI DETECTOR ANALYSIS RESULTS\n" +
        "----------------------------------------\n\n";
    
    let footer = "\n----------------------------------------\nPress SPACE to continue.";
    
    // ---------- YES ----------
    if (check_resp === "y") {
        let v = supportive();
    
        feedback_msg =
            header +
            `${detectors[0].padEnd(25)} ${v[0]}% ${user_label}\n` +
            `${detectors[1].padEnd(25)} ${v[1]}% ${user_label}\n` +
            `${detectors[2].padEnd(25)} ${v[2]}% ${user_label}\n\n` +
            "Your judgment appears CORRECT." +
            footer;
    
        trust_condition = "raised";
    }
    
    // ---------- NO ----------
    else if (check_resp === "n") {
        let v = contradictory();
    
        feedback_msg =
            header +
            `${detectors[0].padEnd(25)} ${v[0]}% ${user_label}\n` +
            `${detectors[1].padEnd(25)} ${v[1]}% ${user_label}\n` +
            `${detectors[2].padEnd(25)} ${v[2]}% ${user_label}\n\n` +
            "Your judgment appears INCORRECT.\n" +
            `The text was more likely ${opposite_label.toUpperCase()}.` +
            footer;
    
        trust_condition = "lowered";
    }
    
    // ---------- UNKNOWN ----------
    else {
        feedback_msg =
            "Could not register your response." +
            footer;
        trust_condition = "unknown";
    }
    
    psychoJS.experiment.addData("ai_resp_clean", ai_resp);
    psychoJS.experiment.addData("check_resp_clean", check_resp);
    psychoJS.experiment.addData("trust_condition", trust_condition);
    
    feedback_text.setText(feedback_msg);
    feedback_key.keys = undefined;
    feedback_key.rt = undefined;
    _feedback_key_allKeys = [];
    psychoJS.experiment.addData('trust_feedback.started', globalClock.getTime());
    trust_feedbackMaxDuration = null
    // keep track of which components have finished
    trust_feedbackComponents = [];
    trust_feedbackComponents.push(feedback_text);
    trust_feedbackComponents.push(feedback_key);
    
    trust_feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function trust_feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trust_feedback' ---
    // get current time
    t = trust_feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedback_text* updates
    if (t >= 0.0 && feedback_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_text.tStart = t;  // (not accounting for frame time here)
      feedback_text.frameNStart = frameN;  // exact frame index
      
      feedback_text.setAutoDraw(true);
    }
    
    
    // if feedback_text is active this frame...
    if (feedback_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *feedback_key* updates
    if (t >= 0.0 && feedback_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback_key.tStart = t;  // (not accounting for frame time here)
      feedback_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { feedback_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { feedback_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { feedback_key.clearEvents(); });
    }
    
    // if feedback_key is active this frame...
    if (feedback_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = feedback_key.getKeys({keyList: 'space', waitRelease: false});
      _feedback_key_allKeys = _feedback_key_allKeys.concat(theseKeys);
      if (_feedback_key_allKeys.length > 0) {
        feedback_key.keys = _feedback_key_allKeys[_feedback_key_allKeys.length - 1].name;  // just the last key pressed
        feedback_key.rt = _feedback_key_allKeys[_feedback_key_allKeys.length - 1].rt;
        feedback_key.duration = _feedback_key_allKeys[_feedback_key_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trust_feedbackComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trust_feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trust_feedback' ---
    trust_feedbackComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('trust_feedback.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(feedback_key.corr, level);
    }
    psychoJS.experiment.addData('feedback_key.keys', feedback_key.keys);
    if (typeof feedback_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('feedback_key.rt', feedback_key.rt);
        psychoJS.experiment.addData('feedback_key.duration', feedback_key.duration);
        routineTimer.reset();
        }
    
    feedback_key.stop();
    // the Routine "trust_feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var second_AI_judgmentMaxDurationReached;
var _key_resp_allKeys;
var second_AI_judgmentMaxDuration;
var second_AI_judgmentComponents;
function second_AI_judgmentRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'second_AI_judgment' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    second_AI_judgmentClock.reset();
    routineTimer.reset();
    second_AI_judgmentMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    psychoJS.experiment.addData('second_AI_judgment.started', globalClock.getTime());
    second_AI_judgmentMaxDuration = null
    // keep track of which components have finished
    second_AI_judgmentComponents = [];
    second_AI_judgmentComponents.push(Secondaitext);
    second_AI_judgmentComponents.push(key_resp);
    
    second_AI_judgmentComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function second_AI_judgmentRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'second_AI_judgment' ---
    // get current time
    t = second_AI_judgmentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Secondaitext* updates
    if (t >= 0.0 && Secondaitext.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Secondaitext.tStart = t;  // (not accounting for frame time here)
      Secondaitext.frameNStart = frameN;  // exact frame index
      
      Secondaitext.setAutoDraw(true);
    }
    
    
    // if Secondaitext is active this frame...
    if (Secondaitext.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }
    
    // if key_resp is active this frame...
    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: 'space', waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    second_AI_judgmentComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function second_AI_judgmentRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'second_AI_judgment' ---
    second_AI_judgmentComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('second_AI_judgment.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        psychoJS.experiment.addData('key_resp.duration', key_resp.duration);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "second_AI_judgment" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var second_AI_judgment_2MaxDurationReached;
var _key_resp_2_allKeys;
var second_AI_judgment_2MaxDuration;
var second_AI_judgment_2Components;
function second_AI_judgment_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'second_AI_judgment_2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    second_AI_judgment_2Clock.reset();
    routineTimer.reset();
    second_AI_judgment_2MaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    psychoJS.experiment.addData('second_AI_judgment_2.started', globalClock.getTime());
    second_AI_judgment_2MaxDuration = null
    // keep track of which components have finished
    second_AI_judgment_2Components = [];
    second_AI_judgment_2Components.push(second_AI_question);
    second_AI_judgment_2Components.push(key_resp_2);
    
    second_AI_judgment_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function second_AI_judgment_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'second_AI_judgment_2' ---
    // get current time
    t = second_AI_judgment_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *second_AI_question* updates
    if (t >= 0.0 && second_AI_question.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      second_AI_question.tStart = t;  // (not accounting for frame time here)
      second_AI_question.frameNStart = frameN;  // exact frame index
      
      second_AI_question.setAutoDraw(true);
    }
    
    
    // if second_AI_question is active this frame...
    if (second_AI_question.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }
    
    // if key_resp_2 is active this frame...
    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['a','h','A','H'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        key_resp_2.duration = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    second_AI_judgment_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function second_AI_judgment_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'second_AI_judgment_2' ---
    second_AI_judgment_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('second_AI_judgment_2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        psychoJS.experiment.addData('key_resp_2.duration', key_resp_2.duration);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "second_AI_judgment_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var second_checkMaxDurationReached;
var _key_resp_3_allKeys;
var second_checkMaxDuration;
var second_checkComponents;
function second_checkRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'second_check' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    second_checkClock.reset();
    routineTimer.reset();
    second_checkMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    psychoJS.experiment.addData('second_check.started', globalClock.getTime());
    second_checkMaxDuration = null
    // keep track of which components have finished
    second_checkComponents = [];
    second_checkComponents.push(secondcheck);
    second_checkComponents.push(key_resp_3);
    
    second_checkComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function second_checkRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'second_check' ---
    // get current time
    t = second_checkClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *secondcheck* updates
    if (t >= 0.0 && secondcheck.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      secondcheck.tStart = t;  // (not accounting for frame time here)
      secondcheck.frameNStart = frameN;  // exact frame index
      
      secondcheck.setAutoDraw(true);
    }
    
    
    // if secondcheck is active this frame...
    if (secondcheck.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }
    
    // if key_resp_3 is active this frame...
    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['y','n','Y','N'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        key_resp_3.duration = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    second_checkComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function second_checkRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'second_check' ---
    second_checkComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('second_check.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_3.corr, level);
    }
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        psychoJS.experiment.addData('key_resp_3.duration', key_resp_3.duration);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    // the Routine "second_check" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var end_screenMaxDurationReached;
var _key_resp_4_allKeys;
var end_screenMaxDuration;
var end_screenComponents;
function end_screenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end_screen' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    end_screenClock.reset();
    routineTimer.reset();
    end_screenMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    psychoJS.experiment.addData('end_screen.started', globalClock.getTime());
    end_screenMaxDuration = null
    // keep track of which components have finished
    end_screenComponents = [];
    end_screenComponents.push(debrief_text);
    end_screenComponents.push(key_resp_4);
    
    end_screenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function end_screenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end_screen' ---
    // get current time
    t = end_screenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *debrief_text* updates
    if (t >= 0.0 && debrief_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      debrief_text.tStart = t;  // (not accounting for frame time here)
      debrief_text.frameNStart = frameN;  // exact frame index
      
      debrief_text.setAutoDraw(true);
    }
    
    
    // if debrief_text is active this frame...
    if (debrief_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_4* updates
    if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }
    
    // if key_resp_4 is active this frame...
    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: 'space', waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        key_resp_4.duration = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    end_screenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function end_screenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end_screen' ---
    end_screenComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('end_screen.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_4.corr, level);
    }
    psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
    if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
        psychoJS.experiment.addData('key_resp_4.duration', key_resp_4.duration);
        routineTimer.reset();
        }
    
    key_resp_4.stop();
    // the Routine "end_screen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var thank_youMaxDurationReached;
var _key_resp_5_allKeys;
var thank_youMaxDuration;
var thank_youComponents;
function thank_youRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'thank_you' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    thank_youClock.reset();
    routineTimer.reset();
    thank_youMaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    psychoJS.experiment.addData('thank_you.started', globalClock.getTime());
    thank_youMaxDuration = null
    // keep track of which components have finished
    thank_youComponents = [];
    thank_youComponents.push(thanks);
    thank_youComponents.push(key_resp_5);
    
    thank_youComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function thank_youRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'thank_you' ---
    // get current time
    t = thank_youClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *thanks* updates
    if (t >= 0.0 && thanks.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      thanks.tStart = t;  // (not accounting for frame time here)
      thanks.frameNStart = frameN;  // exact frame index
      
      thanks.setAutoDraw(true);
    }
    
    
    // if thanks is active this frame...
    if (thanks.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_5* updates
    if (t >= 0.0 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }
    
    // if key_resp_5 is active this frame...
    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({keyList: 'space', waitRelease: false});
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
        key_resp_5.duration = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    thank_youComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function thank_youRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'thank_you' ---
    thank_youComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('thank_you.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_5.corr, level);
    }
    psychoJS.experiment.addData('key_resp_5.keys', key_resp_5.keys);
    if (typeof key_resp_5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_5.rt', key_resp_5.rt);
        psychoJS.experiment.addData('key_resp_5.duration', key_resp_5.duration);
        routineTimer.reset();
        }
    
    key_resp_5.stop();
    // the Routine "thank_you" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
