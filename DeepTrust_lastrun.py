#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2025.1.1),
    on December 11, 2025, at 12:41
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
from psychopy import plugins
plugins.activatePlugins()
prefs.hardware['audioLib'] = 'ptb'
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout, hardware
from psychopy.tools import environmenttools
from psychopy.constants import (
    NOT_STARTED, STARTED, PLAYING, PAUSED, STOPPED, STOPPING, FINISHED, PRESSED, 
    RELEASED, FOREVER, priority
)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard

# --- Setup global variables (available in all functions) ---
# create a device manager to handle hardware (keyboards, mice, mirophones, speakers, etc.)
deviceManager = hardware.DeviceManager()
# ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
# store info about the experiment session
psychopyVersion = '2025.1.1'
expName = 'DeepTrust'  # from the Builder filename that created this script
expVersion = ''
# a list of functions to run when the experiment ends (starts off blank)
runAtExit = []
# information about this experiment
expInfo = {
    'participant': f"{randint(0, 999999):06.0f}",
    'session': '001',
    'date|hid': data.getDateStr(),
    'expName|hid': expName,
    'expVersion|hid': expVersion,
    'psychopyVersion|hid': psychopyVersion,
}

# --- Define some variables which will change depending on pilot mode ---
'''
To run in pilot mode, either use the run/pilot toggle in Builder, Coder and Runner, 
or run the experiment with `--pilot` as an argument. To change what pilot 
#mode does, check out the 'Pilot mode' tab in preferences.
'''
# work out from system args whether we are running in pilot mode
PILOTING = core.setPilotModeFromArgs()
# start off with values from experiment settings
_fullScr = True
_winSize = [1536, 864]
# if in pilot mode, apply overrides according to preferences
if PILOTING:
    # force windowed mode
    if prefs.piloting['forceWindowed']:
        _fullScr = False
        # set window size
        _winSize = prefs.piloting['forcedWindowSize']
    # replace default participant ID
    if prefs.piloting['replaceParticipantID']:
        expInfo['participant'] = 'pilot'

def showExpInfoDlg(expInfo):
    """
    Show participant info dialog.
    Parameters
    ==========
    expInfo : dict
        Information about this experiment.
    
    Returns
    ==========
    dict
        Information about this experiment.
    """
    # show participant info dialog
    dlg = gui.DlgFromDict(
        dictionary=expInfo, sortKeys=False, title=expName, alwaysOnTop=True
    )
    if dlg.OK == False:
        core.quit()  # user pressed cancel
    # return expInfo
    return expInfo


def setupData(expInfo, dataDir=None):
    """
    Make an ExperimentHandler to handle trials and saving.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    dataDir : Path, str or None
        Folder to save the data to, leave as None to create a folder in the current directory.    
    Returns
    ==========
    psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    # remove dialog-specific syntax from expInfo
    for key, val in expInfo.copy().items():
        newKey, _ = data.utils.parsePipeSyntax(key)
        expInfo[newKey] = expInfo.pop(key)
    
    # data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
    if dataDir is None:
        dataDir = _thisDir
    filename = u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])
    # make sure filename is relative to dataDir
    if os.path.isabs(filename):
        dataDir = os.path.commonprefix([dataDir, filename])
        filename = os.path.relpath(filename, dataDir)
    
    # an ExperimentHandler isn't essential but helps with data saving
    thisExp = data.ExperimentHandler(
        name=expName, version=expVersion,
        extraInfo=expInfo, runtimeInfo=None,
        originPath='C:\\Users\\riyaz\\OneDrive\\Desktop\\Psy-exp\\DeepTrust_lastrun.py',
        savePickle=True, saveWideText=True,
        dataFileName=dataDir + os.sep + filename, sortColumns='time'
    )
    thisExp.setPriority('thisRow.t', priority.CRITICAL)
    thisExp.setPriority('expName', priority.LOW)
    # return experiment handler
    return thisExp


def setupLogging(filename):
    """
    Setup a log file and tell it what level to log at.
    
    Parameters
    ==========
    filename : str or pathlib.Path
        Filename to save log file and data files as, doesn't need an extension.
    
    Returns
    ==========
    psychopy.logging.LogFile
        Text stream to receive inputs from the logging system.
    """
    # set how much information should be printed to the console / app
    if PILOTING:
        logging.console.setLevel(
            prefs.piloting['pilotConsoleLoggingLevel']
        )
    else:
        logging.console.setLevel('warning')
    # save a log file for detail verbose info
    logFile = logging.LogFile(filename+'.log')
    if PILOTING:
        logFile.setLevel(
            prefs.piloting['pilotLoggingLevel']
        )
    else:
        logFile.setLevel(
            logging.getLevel('info')
        )
    
    return logFile


def setupWindow(expInfo=None, win=None):
    """
    Setup the Window
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    win : psychopy.visual.Window
        Window to setup - leave as None to create a new window.
    
    Returns
    ==========
    psychopy.visual.Window
        Window in which to run this experiment.
    """
    if PILOTING:
        logging.debug('Fullscreen settings ignored as running in pilot mode.')
    
    if win is None:
        # if not given a window to setup, make one
        win = visual.Window(
            size=_winSize, fullscr=_fullScr, screen=0,
            winType='pyglet', allowGUI=False, allowStencil=True,
            monitor='testMonitor', color=[0.7569, 1.0000, 1.0000], colorSpace='rgb',
            backgroundImage='', backgroundFit='none',
            blendMode='avg', useFBO=True,
            units='height',
            checkTiming=False  # we're going to do this ourselves in a moment
        )
    else:
        # if we have a window, just set the attributes which are safe to set
        win.color = [0.7569, 1.0000, 1.0000]
        win.colorSpace = 'rgb'
        win.backgroundImage = ''
        win.backgroundFit = 'none'
        win.units = 'height'
    if expInfo is not None:
        # get/measure frame rate if not already in expInfo
        if win._monitorFrameRate is None:
            win._monitorFrameRate = win.getActualFrameRate(infoMsg='Attempting to measure frame rate of screen, please wait...')
        expInfo['frameRate'] = win._monitorFrameRate
    win.hideMessage()
    if PILOTING:
        # show a visual indicator if we're in piloting mode
        if prefs.piloting['showPilotingIndicator']:
            win.showPilotingIndicator()
        # always show the mouse in piloting mode
        if prefs.piloting['forceMouseVisible']:
            win.mouseVisible = True
    
    return win


def setupDevices(expInfo, thisExp, win):
    """
    Setup whatever devices are available (mouse, keyboard, speaker, eyetracker, etc.) and add them to 
    the device manager (deviceManager)
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window in which to run this experiment.
    Returns
    ==========
    bool
        True if completed successfully.
    """
    # --- Setup input devices ---
    ioConfig = {}
    ioSession = ioServer = eyetracker = None
    
    # store ioServer object in the device manager
    deviceManager.ioServer = ioServer
    
    # create a default keyboard (e.g. to check for escape)
    if deviceManager.getDevice('defaultKeyboard') is None:
        deviceManager.addDevice(
            deviceClass='keyboard', deviceName='defaultKeyboard', backend='ptb'
        )
    if deviceManager.getDevice('consent_resp') is None:
        # initialise consent_resp
        consent_resp = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='consent_resp',
        )
    if deviceManager.getDevice('first_text_key') is None:
        # initialise first_text_key
        first_text_key = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='first_text_key',
        )
    if deviceManager.getDevice('first_AI_key') is None:
        # initialise first_AI_key
        first_AI_key = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='first_AI_key',
        )
    if deviceManager.getDevice('first_check_key') is None:
        # initialise first_check_key
        first_check_key = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='first_check_key',
        )
    if deviceManager.getDevice('feedback_key') is None:
        # initialise feedback_key
        feedback_key = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='feedback_key',
        )
    if deviceManager.getDevice('key_resp') is None:
        # initialise key_resp
        key_resp = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp',
        )
    if deviceManager.getDevice('key_resp_2') is None:
        # initialise key_resp_2
        key_resp_2 = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_2',
        )
    if deviceManager.getDevice('key_resp_3') is None:
        # initialise key_resp_3
        key_resp_3 = deviceManager.addDevice(
            deviceClass='keyboard',
            deviceName='key_resp_3',
        )
    # return True if completed successfully
    return True

def pauseExperiment(thisExp, win=None, timers=[], currentRoutine=None):
    """
    Pause this experiment, preventing the flow from advancing to the next routine until resumed.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window for this experiment.
    timers : list, tuple
        List of timers to reset once pausing is finished.
    currentRoutine : psychopy.data.Routine
        Current Routine we are in at time of pausing, if any. This object tells PsychoPy what Components to pause/play/dispatch.
    """
    # if we are not paused, do nothing
    if thisExp.status != PAUSED:
        return
    
    # start a timer to figure out how long we're paused for
    pauseTimer = core.Clock()
    # pause any playback components
    if currentRoutine is not None:
        for comp in currentRoutine.getPlaybackComponents():
            comp.pause()
    # make sure we have a keyboard
    defaultKeyboard = deviceManager.getDevice('defaultKeyboard')
    if defaultKeyboard is None:
        defaultKeyboard = deviceManager.addKeyboard(
            deviceClass='keyboard',
            deviceName='defaultKeyboard',
            backend='PsychToolbox',
        )
    # run a while loop while we wait to unpause
    while thisExp.status == PAUSED:
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=['escape']):
            endExperiment(thisExp, win=win)
        # dispatch messages on response components
        if currentRoutine is not None:
            for comp in currentRoutine.getDispatchComponents():
                comp.device.dispatchMessages()
        # sleep 1ms so other threads can execute
        clock.time.sleep(0.001)
    # if stop was requested while paused, quit
    if thisExp.status == FINISHED:
        endExperiment(thisExp, win=win)
    # resume any playback components
    if currentRoutine is not None:
        for comp in currentRoutine.getPlaybackComponents():
            comp.play()
    # reset any timers
    for timer in timers:
        timer.addTime(-pauseTimer.getTime())


def run(expInfo, thisExp, win, globalClock=None, thisSession=None):
    """
    Run the experiment flow.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    psychopy.visual.Window
        Window in which to run this experiment.
    globalClock : psychopy.core.clock.Clock or None
        Clock to get global time from - supply None to make a new one.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    # mark experiment as started
    thisExp.status = STARTED
    # make sure window is set to foreground to prevent losing focus
    win.winHandle.activate()
    # make sure variables created by exec are available globally
    exec = environmenttools.setExecEnvironment(globals())
    # get device handles from dict of input devices
    ioServer = deviceManager.ioServer
    # get/create a default keyboard (e.g. to check for escape)
    defaultKeyboard = deviceManager.getDevice('defaultKeyboard')
    if defaultKeyboard is None:
        deviceManager.addDevice(
            deviceClass='keyboard', deviceName='defaultKeyboard', backend='PsychToolbox'
        )
    eyetracker = deviceManager.getDevice('eyetracker')
    # make sure we're running in the directory for this experiment
    os.chdir(_thisDir)
    # get filename from ExperimentHandler for convenience
    filename = thisExp.dataFileName
    frameTolerance = 0.001  # how close to onset before 'same' frame
    endExpNow = False  # flag for 'escape' or other condition => quit the exp
    # get frame duration from frame rate in expInfo
    if 'frameRate' in expInfo and expInfo['frameRate'] is not None:
        frameDur = 1.0 / round(expInfo['frameRate'])
    else:
        frameDur = 1.0 / 60.0  # could not measure, so guess
    
    # Start Code - component code to be run after the window creation
    
    # --- Initialize components for Routine "Consent_Page" ---
    consent_box = visual.TextBox2(
         win, text='Thank you for taking part in this study. Please read the information below.\n\nWhat will I have to do?\nYou will read a few short texts and answer some questions about them\n(for example, whether you think the text was written by a human or by\nan AI system, and whether you would like to check it with an AI detector).\nThe study will take about 10–15 minutes.\n\nAnonymity and data protection\nWe do not collect any identifying information about you.\nYour responses will be stored under a random participant code and used\nonly for teaching/research purposes in anonymised form.\n\nVoluntary participation\nYour participation is completely voluntary.\nYou are free to stop the study at any time by closing this window,\nwithout giving a reason and without any negative consequences.\n\nConsent\nBy pressing SPACE below, you indicate your consent to participate.\n', placeholder='Type here...', font='Arial',
         ori=0.0, pos=(0, 0), draggable=False,      letterHeight=0.03,
         size=(1.5, 1.5), borderWidth=2.0,
         color='black', colorSpace='rgb',
         opacity=None,
         bold=False, italic=True,
         lineSpacing=1.5, speechPoint=None,
         padding=0.0, alignment='center',
         anchor='center', overflow='visible',
         fillColor=None, borderColor=None,
         flipHoriz=False, flipVert=False, languageStyle='LTR',
         editable=False,
         name='consent_box',
         depth=0, autoLog=True,
    )
    consent_resp = keyboard.Keyboard(deviceName='consent_resp')
    # Run 'Begin Experiment' code from code
    import random
    
    nConditions = 6  # number of rows in first_content.xlsx
    randIndex = random.randint(0, nConditions - 1)
    
    # create a string like "3:4" meaning "use only row 3"
    conditionSelector = f"{randIndex}:{randIndex + 1}"
    
    
    # --- Initialize components for Routine "first_text" ---
    question_text = visual.TextBox2(
         win, text='', placeholder='Type here...', font='Arial',
         ori=0.0, pos=(0, 0.35), draggable=False,      letterHeight=0.05,
         size=(1.5, 1.5), borderWidth=2.0,
         color='black', colorSpace='rgb',
         opacity=None,
         bold=False, italic=False,
         lineSpacing=1.0, speechPoint=None,
         padding=0.0, alignment='center',
         anchor='center', overflow='visible',
         fillColor=None, borderColor=None,
         flipHoriz=False, flipVert=False, languageStyle='LTR',
         editable=False,
         name='question_text',
         depth=0, autoLog=True,
    )
    answer_box = visual.TextBox2(
         win, text='', placeholder='Type here...', font='Arial',
         ori=0.0, pos=(0, -0.3), draggable=False,      letterHeight=0.03,
         size=(1.5, 3.5), borderWidth=2.0,
         color='black', colorSpace='rgb',
         opacity=None,
         bold=False, italic=False,
         lineSpacing=1.0, speechPoint=None,
         padding=0.0, alignment='top-left',
         anchor='center', overflow='scroll',
         fillColor=None, borderColor=None,
         flipHoriz=False, flipVert=False, languageStyle='LTR',
         editable=False,
         name='answer_box',
         depth=-1, autoLog=True,
    )
    first_text_key = keyboard.Keyboard(deviceName='first_text_key')
    
    # --- Initialize components for Routine "first_AI_judgment" ---
    textbox = visual.TextBox2(
         win, text='Do you think the response you just read was written by an AI system or by a human?\n\n\n\n\nPress A for AI-generated.\nPress H for human-written.\n', placeholder='Type here...', font='Arial',
         ori=0.0, pos=(0, 0), draggable=False,      letterHeight=0.05,
         size=(3.5, 0.5), borderWidth=2.0,
         color='black', colorSpace='rgb',
         opacity=None,
         bold=False, italic=False,
         lineSpacing=1.0, speechPoint=None,
         padding=0.0, alignment='center',
         anchor='center', overflow='visible',
         fillColor=None, borderColor=None,
         flipHoriz=False, flipVert=False, languageStyle='LTR',
         editable=False,
         name='textbox',
         depth=0, autoLog=True,
    )
    first_AI_key = keyboard.Keyboard(deviceName='first_AI_key')
    
    # --- Initialize components for Routine "first_check" ---
    textbox_2 = visual.TextBox2(
         win, text='Would you like to check this response using the AI detector?\n\n\n\nPress Y for Yes.\nPress N for No.\n', placeholder='Type here...', font='Arial',
         ori=0.0, pos=(0, 0), draggable=False,      letterHeight=0.05,
         size=(2.5, 0.5), borderWidth=2.0,
         color='black', colorSpace='rgb',
         opacity=None,
         bold=False, italic=False,
         lineSpacing=1.0, speechPoint=None,
         padding=0.0, alignment='center',
         anchor='center', overflow='visible',
         fillColor=None, borderColor=None,
         flipHoriz=False, flipVert=False, languageStyle='LTR',
         editable=False,
         name='textbox_2',
         depth=0, autoLog=True,
    )
    first_check_key = keyboard.Keyboard(deviceName='first_check_key')
    
    # --- Initialize components for Routine "trust_feedback" ---
    feedback_text = visual.TextBox2(
         win, text='', placeholder='Type here...', font='Arial',
         ori=0.0, pos=(0, 0), draggable=False,      letterHeight=0.05,
         size=(1.5, 1.0), borderWidth=2.0,
         color='black', colorSpace='rgb',
         opacity=None,
         bold=False, italic=False,
         lineSpacing=1.0, speechPoint=None,
         padding=0.0, alignment='center',
         anchor='center', overflow='visible',
         fillColor=None, borderColor=None,
         flipHoriz=False, flipVert=False, languageStyle='LTR',
         editable=False,
         name='feedback_text',
         depth=-1, autoLog=True,
    )
    feedback_key = keyboard.Keyboard(deviceName='feedback_key')
    
    # --- Initialize components for Routine "second_AI_judgment" ---
    Secondaitext = visual.TextBox2(
         win, text='Here is another explanation about Human–AI collaboration:\n\n"In many interdisciplinary settings, collaboration between humans and AI systems requires careful attention to trust, transparency, and shared decision-making. Psychologists focus on human behavior and cognitive biases, philosophers explore ethical and epistemic implications, and computer scientists develop the algorithms that shape interactions."\n\n----------------------------------------\nPress SPACE to continue.\n', placeholder='Type here...', font='Arial',
         ori=0.0, pos=(0, 0), draggable=False,      letterHeight=0.05,
         size=(1.5, 1.0), borderWidth=2.0,
         color='black', colorSpace='rgb',
         opacity=None,
         bold=False, italic=False,
         lineSpacing=1.0, speechPoint=None,
         padding=0.0, alignment='center',
         anchor='center', overflow='visible',
         fillColor=None, borderColor=None,
         flipHoriz=False, flipVert=False, languageStyle='LTR',
         editable=False,
         name='Secondaitext',
         depth=0, autoLog=True,
    )
    key_resp = keyboard.Keyboard(deviceName='key_resp')
    
    # --- Initialize components for Routine "second_AI_judgment_2" ---
    second_AI_question = visual.TextBox2(
         win, text='Do you think this explanation was AI-generated or written by a human?\n\nPress A for AI-generated  \nPress H for Human-written\n', placeholder='Type here...', font='Arial',
         ori=0.0, pos=(0, 0), draggable=False,      letterHeight=0.05,
         size=(1.5, 0.5), borderWidth=2.0,
         color='black', colorSpace='rgb',
         opacity=None,
         bold=False, italic=False,
         lineSpacing=1.0, speechPoint=None,
         padding=0.0, alignment='center',
         anchor='center', overflow='visible',
         fillColor=None, borderColor=None,
         flipHoriz=False, flipVert=False, languageStyle='LTR',
         editable=False,
         name='second_AI_question',
         depth=0, autoLog=True,
    )
    key_resp_2 = keyboard.Keyboard(deviceName='key_resp_2')
    
    # --- Initialize components for Routine "second_check" ---
    secondcheck = visual.TextBox2(
         win, text='Would you like to check this explanation using the AI detector?\n\nPress Y for Yes  \nPress N for No\n\n----------------------------------------\n', placeholder='Type here...', font='Arial',
         ori=0.0, pos=(0, 0), draggable=False,      letterHeight=0.05,
         size=(1.5, 0.5), borderWidth=2.0,
         color='black', colorSpace='rgb',
         opacity=None,
         bold=False, italic=False,
         lineSpacing=1.0, speechPoint=None,
         padding=0.0, alignment='center',
         anchor='center', overflow='visible',
         fillColor=None, borderColor=None,
         flipHoriz=False, flipVert=False, languageStyle='LTR',
         editable=False,
         name='secondcheck',
         depth=0, autoLog=True,
    )
    key_resp_3 = keyboard.Keyboard(deviceName='key_resp_3')
    
    # --- Initialize components for Routine "end_screen" ---
    debrief_text = visual.TextBox2(
         win, text='----------------------------------------\nThank You for Participating!\n----------------------------------------\n\nThis experiment examined how interacting with AI-generated content\nand receiving detector feedback influences people’s trust and\nsuspicion when evaluating new information.\n\nSome clarification:\n\n• The “AI detector results” shown earlier were NOT produced by real detectors.  \n• The confidence scores and feedback were intentionally manipulated.  \n• The purpose was to understand how positive or negative confirmation\n  affects your likelihood to check content again.\n\nPlease note:\nThe second explanation you evaluated was always AI-generated,\nfor every participant. We are interested in how trust manipulation\ninfluenced your final decision to use or not use the detector.\n\nYour data has been recorded anonymously and will be used strictly\nfor educational and research purposes within this course.\n\n----------------------------------------\nPress SPACE to finish.\n', placeholder='Type here...', font='Arial',
         ori=0.0, pos=(0, 0), draggable=False,      letterHeight=0.05,
         size=(4.5, 4.5), borderWidth=2.0,
         color='black', colorSpace='rgb',
         opacity=None,
         bold=False, italic=False,
         lineSpacing=1.0, speechPoint=None,
         padding=0.0, alignment='center',
         anchor='center', overflow='visible',
         fillColor=None, borderColor=None,
         flipHoriz=False, flipVert=False, languageStyle='LTR',
         editable=False,
         name='debrief_text',
         depth=0, autoLog=True,
    )
    
    # --- Initialize components for Routine "thank_you" ---
    thanks = visual.TextBox2(
         win, text='Thank you for your valuabe time', placeholder='Type here...', font='Arial',
         ori=0.0, pos=(0, 0), draggable=False,      letterHeight=0.05,
         size=(0.5, 0.5), borderWidth=2.0,
         color='white', colorSpace='rgb',
         opacity=None,
         bold=False, italic=False,
         lineSpacing=1.0, speechPoint=None,
         padding=0.0, alignment='center',
         anchor='center', overflow='visible',
         fillColor=None, borderColor=None,
         flipHoriz=False, flipVert=False, languageStyle='LTR',
         editable=False,
         name='thanks',
         depth=0, autoLog=True,
    )
    
    # create some handy timers
    
    # global clock to track the time since experiment started
    if globalClock is None:
        # create a clock if not given one
        globalClock = core.Clock()
    if isinstance(globalClock, str):
        # if given a string, make a clock accoridng to it
        if globalClock == 'float':
            # get timestamps as a simple value
            globalClock = core.Clock(format='float')
        elif globalClock == 'iso':
            # get timestamps in ISO format
            globalClock = core.Clock(format='%Y-%m-%d_%H:%M:%S.%f%z')
        else:
            # get timestamps in a custom format
            globalClock = core.Clock(format=globalClock)
    if ioServer is not None:
        ioServer.syncClock(globalClock)
    logging.setDefaultClock(globalClock)
    # routine timer to track time remaining of each (possibly non-slip) routine
    routineTimer = core.Clock()
    win.flip()  # flip window to reset last flip timer
    # store the exact time the global clock started
    expInfo['expStart'] = data.getDateStr(
        format='%Y-%m-%d %Hh%M.%S.%f %z', fractionalSecondDigits=6
    )
    
    # --- Prepare to start Routine "Consent_Page" ---
    # create an object to store info about Routine Consent_Page
    Consent_Page = data.Routine(
        name='Consent_Page',
        components=[consent_box, consent_resp],
    )
    Consent_Page.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    consent_box.reset()
    # create starting attributes for consent_resp
    consent_resp.keys = []
    consent_resp.rt = []
    _consent_resp_allKeys = []
    # store start times for Consent_Page
    Consent_Page.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    Consent_Page.tStart = globalClock.getTime(format='float')
    Consent_Page.status = STARTED
    thisExp.addData('Consent_Page.started', Consent_Page.tStart)
    Consent_Page.maxDuration = None
    # keep track of which components have finished
    Consent_PageComponents = Consent_Page.components
    for thisComponent in Consent_Page.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "Consent_Page" ---
    Consent_Page.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *consent_box* updates
        
        # if consent_box is starting this frame...
        if consent_box.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            consent_box.frameNStart = frameN  # exact frame index
            consent_box.tStart = t  # local t and not account for scr refresh
            consent_box.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(consent_box, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'consent_box.started')
            # update status
            consent_box.status = STARTED
            consent_box.setAutoDraw(True)
        
        # if consent_box is active this frame...
        if consent_box.status == STARTED:
            # update params
            pass
        
        # *consent_resp* updates
        waitOnFlip = False
        
        # if consent_resp is starting this frame...
        if consent_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            consent_resp.frameNStart = frameN  # exact frame index
            consent_resp.tStart = t  # local t and not account for scr refresh
            consent_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(consent_resp, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'consent_resp.started')
            # update status
            consent_resp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(consent_resp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(consent_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if consent_resp.status == STARTED and not waitOnFlip:
            theseKeys = consent_resp.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _consent_resp_allKeys.extend(theseKeys)
            if len(_consent_resp_allKeys):
                consent_resp.keys = _consent_resp_allKeys[-1].name  # just the last key pressed
                consent_resp.rt = _consent_resp_allKeys[-1].rt
                consent_resp.duration = _consent_resp_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer, globalClock], 
                currentRoutine=Consent_Page,
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            Consent_Page.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in Consent_Page.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "Consent_Page" ---
    for thisComponent in Consent_Page.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for Consent_Page
    Consent_Page.tStop = globalClock.getTime(format='float')
    Consent_Page.tStopRefresh = tThisFlipGlobal
    thisExp.addData('Consent_Page.stopped', Consent_Page.tStop)
    # check responses
    if consent_resp.keys in ['', [], None]:  # No response was made
        consent_resp.keys = None
    thisExp.addData('consent_resp.keys',consent_resp.keys)
    if consent_resp.keys != None:  # we had a response
        thisExp.addData('consent_resp.rt', consent_resp.rt)
        thisExp.addData('consent_resp.duration', consent_resp.duration)
    thisExp.nextEntry()
    # the Routine "Consent_Page" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    first_loop = data.TrialHandler2(
        name='first_loop',
        nReps=1.0, 
        method='random', 
        extraInfo=expInfo, 
        originPath=-1, 
        trialList=data.importConditions(
        'first_content.xlsx', 
        selection=conditionSelector
    )
    , 
        seed=None, 
    )
    thisExp.addLoop(first_loop)  # add the loop to the experiment
    thisFirst_loop = first_loop.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisFirst_loop.rgb)
    if thisFirst_loop != None:
        for paramName in thisFirst_loop:
            globals()[paramName] = thisFirst_loop[paramName]
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    for thisFirst_loop in first_loop:
        first_loop.status = STARTED
        if hasattr(thisFirst_loop, 'status'):
            thisFirst_loop.status = STARTED
        currentLoop = first_loop
        thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
        # abbreviate parameter names if possible (e.g. rgb = thisFirst_loop.rgb)
        if thisFirst_loop != None:
            for paramName in thisFirst_loop:
                globals()[paramName] = thisFirst_loop[paramName]
        
        # --- Prepare to start Routine "first_text" ---
        # create an object to store info about Routine first_text
        first_text = data.Routine(
            name='first_text',
            components=[question_text, answer_box, first_text_key],
        )
        first_text.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        question_text.reset()
        question_text.setText(question)
        answer_box.reset()
        answer_box.setText(answer)
        # create starting attributes for first_text_key
        first_text_key.keys = []
        first_text_key.rt = []
        _first_text_key_allKeys = []
        # store start times for first_text
        first_text.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        first_text.tStart = globalClock.getTime(format='float')
        first_text.status = STARTED
        thisExp.addData('first_text.started', first_text.tStart)
        first_text.maxDuration = None
        # keep track of which components have finished
        first_textComponents = first_text.components
        for thisComponent in first_text.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "first_text" ---
        first_text.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine:
            # if trial has changed, end Routine now
            if hasattr(thisFirst_loop, 'status') and thisFirst_loop.status == STOPPING:
                continueRoutine = False
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *question_text* updates
            
            # if question_text is starting this frame...
            if question_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                question_text.frameNStart = frameN  # exact frame index
                question_text.tStart = t  # local t and not account for scr refresh
                question_text.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(question_text, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'question_text.started')
                # update status
                question_text.status = STARTED
                question_text.setAutoDraw(True)
            
            # if question_text is active this frame...
            if question_text.status == STARTED:
                # update params
                pass
            
            # *answer_box* updates
            
            # if answer_box is starting this frame...
            if answer_box.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                answer_box.frameNStart = frameN  # exact frame index
                answer_box.tStart = t  # local t and not account for scr refresh
                answer_box.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(answer_box, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'answer_box.started')
                # update status
                answer_box.status = STARTED
                answer_box.setAutoDraw(True)
            
            # if answer_box is active this frame...
            if answer_box.status == STARTED:
                # update params
                pass
            
            # *first_text_key* updates
            waitOnFlip = False
            
            # if first_text_key is starting this frame...
            if first_text_key.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                first_text_key.frameNStart = frameN  # exact frame index
                first_text_key.tStart = t  # local t and not account for scr refresh
                first_text_key.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(first_text_key, 'tStartRefresh')  # time at next scr refresh
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'first_text_key.started')
                # update status
                first_text_key.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(first_text_key.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(first_text_key.clearEvents, eventType='keyboard')  # clear events on next screen flip
            if first_text_key.status == STARTED and not waitOnFlip:
                theseKeys = first_text_key.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
                _first_text_key_allKeys.extend(theseKeys)
                if len(_first_text_key_allKeys):
                    first_text_key.keys = _first_text_key_allKeys[-1].name  # just the last key pressed
                    first_text_key.rt = _first_text_key_allKeys[-1].rt
                    first_text_key.duration = _first_text_key_allKeys[-1].duration
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer, globalClock], 
                    currentRoutine=first_text,
                )
                # skip the frame we paused on
                continue
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                first_text.forceEnded = routineForceEnded = True
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in first_text.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "first_text" ---
        for thisComponent in first_text.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for first_text
        first_text.tStop = globalClock.getTime(format='float')
        first_text.tStopRefresh = tThisFlipGlobal
        thisExp.addData('first_text.stopped', first_text.tStop)
        # check responses
        if first_text_key.keys in ['', [], None]:  # No response was made
            first_text_key.keys = None
        first_loop.addData('first_text_key.keys',first_text_key.keys)
        if first_text_key.keys != None:  # we had a response
            first_loop.addData('first_text_key.rt', first_text_key.rt)
            first_loop.addData('first_text_key.duration', first_text_key.duration)
        # the Routine "first_text" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        # mark thisFirst_loop as finished
        if hasattr(thisFirst_loop, 'status'):
            thisFirst_loop.status = FINISHED
        # if awaiting a pause, pause now
        if first_loop.status == PAUSED:
            thisExp.status = PAUSED
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[globalClock], 
            )
            # once done pausing, restore running status
            first_loop.status = STARTED
        thisExp.nextEntry()
        
    # completed 1.0 repeats of 'first_loop'
    first_loop.status = FINISHED
    
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    # --- Prepare to start Routine "first_AI_judgment" ---
    # create an object to store info about Routine first_AI_judgment
    first_AI_judgment = data.Routine(
        name='first_AI_judgment',
        components=[textbox, first_AI_key],
    )
    first_AI_judgment.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    textbox.reset()
    # create starting attributes for first_AI_key
    first_AI_key.keys = []
    first_AI_key.rt = []
    _first_AI_key_allKeys = []
    # store start times for first_AI_judgment
    first_AI_judgment.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    first_AI_judgment.tStart = globalClock.getTime(format='float')
    first_AI_judgment.status = STARTED
    thisExp.addData('first_AI_judgment.started', first_AI_judgment.tStart)
    first_AI_judgment.maxDuration = None
    # keep track of which components have finished
    first_AI_judgmentComponents = first_AI_judgment.components
    for thisComponent in first_AI_judgment.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "first_AI_judgment" ---
    first_AI_judgment.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *textbox* updates
        
        # if textbox is starting this frame...
        if textbox.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            textbox.frameNStart = frameN  # exact frame index
            textbox.tStart = t  # local t and not account for scr refresh
            textbox.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(textbox, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'textbox.started')
            # update status
            textbox.status = STARTED
            textbox.setAutoDraw(True)
        
        # if textbox is active this frame...
        if textbox.status == STARTED:
            # update params
            pass
        
        # *first_AI_key* updates
        waitOnFlip = False
        
        # if first_AI_key is starting this frame...
        if first_AI_key.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            first_AI_key.frameNStart = frameN  # exact frame index
            first_AI_key.tStart = t  # local t and not account for scr refresh
            first_AI_key.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(first_AI_key, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'first_AI_key.started')
            # update status
            first_AI_key.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(first_AI_key.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(first_AI_key.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if first_AI_key.status == STARTED and not waitOnFlip:
            theseKeys = first_AI_key.getKeys(keyList=['a', 'h'], ignoreKeys=["escape"], waitRelease=False)
            _first_AI_key_allKeys.extend(theseKeys)
            if len(_first_AI_key_allKeys):
                first_AI_key.keys = _first_AI_key_allKeys[-1].name  # just the last key pressed
                first_AI_key.rt = _first_AI_key_allKeys[-1].rt
                first_AI_key.duration = _first_AI_key_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer, globalClock], 
                currentRoutine=first_AI_judgment,
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            first_AI_judgment.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in first_AI_judgment.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "first_AI_judgment" ---
    for thisComponent in first_AI_judgment.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for first_AI_judgment
    first_AI_judgment.tStop = globalClock.getTime(format='float')
    first_AI_judgment.tStopRefresh = tThisFlipGlobal
    thisExp.addData('first_AI_judgment.stopped', first_AI_judgment.tStop)
    # check responses
    if first_AI_key.keys in ['', [], None]:  # No response was made
        first_AI_key.keys = None
    thisExp.addData('first_AI_key.keys',first_AI_key.keys)
    if first_AI_key.keys != None:  # we had a response
        thisExp.addData('first_AI_key.rt', first_AI_key.rt)
        thisExp.addData('first_AI_key.duration', first_AI_key.duration)
    thisExp.nextEntry()
    # the Routine "first_AI_judgment" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "first_check" ---
    # create an object to store info about Routine first_check
    first_check = data.Routine(
        name='first_check',
        components=[textbox_2, first_check_key],
    )
    first_check.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    textbox_2.reset()
    # create starting attributes for first_check_key
    first_check_key.keys = []
    first_check_key.rt = []
    _first_check_key_allKeys = []
    # store start times for first_check
    first_check.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    first_check.tStart = globalClock.getTime(format='float')
    first_check.status = STARTED
    thisExp.addData('first_check.started', first_check.tStart)
    first_check.maxDuration = None
    # keep track of which components have finished
    first_checkComponents = first_check.components
    for thisComponent in first_check.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "first_check" ---
    first_check.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *textbox_2* updates
        
        # if textbox_2 is starting this frame...
        if textbox_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            textbox_2.frameNStart = frameN  # exact frame index
            textbox_2.tStart = t  # local t and not account for scr refresh
            textbox_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(textbox_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'textbox_2.started')
            # update status
            textbox_2.status = STARTED
            textbox_2.setAutoDraw(True)
        
        # if textbox_2 is active this frame...
        if textbox_2.status == STARTED:
            # update params
            pass
        
        # *first_check_key* updates
        waitOnFlip = False
        
        # if first_check_key is starting this frame...
        if first_check_key.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            first_check_key.frameNStart = frameN  # exact frame index
            first_check_key.tStart = t  # local t and not account for scr refresh
            first_check_key.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(first_check_key, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'first_check_key.started')
            # update status
            first_check_key.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(first_check_key.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(first_check_key.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if first_check_key.status == STARTED and not waitOnFlip:
            theseKeys = first_check_key.getKeys(keyList=['y', 'n'], ignoreKeys=["escape"], waitRelease=False)
            _first_check_key_allKeys.extend(theseKeys)
            if len(_first_check_key_allKeys):
                first_check_key.keys = _first_check_key_allKeys[-1].name  # just the last key pressed
                first_check_key.rt = _first_check_key_allKeys[-1].rt
                first_check_key.duration = _first_check_key_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer, globalClock], 
                currentRoutine=first_check,
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            first_check.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in first_check.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "first_check" ---
    for thisComponent in first_check.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for first_check
    first_check.tStop = globalClock.getTime(format='float')
    first_check.tStopRefresh = tThisFlipGlobal
    thisExp.addData('first_check.stopped', first_check.tStop)
    # check responses
    if first_check_key.keys in ['', [], None]:  # No response was made
        first_check_key.keys = None
    thisExp.addData('first_check_key.keys',first_check_key.keys)
    if first_check_key.keys != None:  # we had a response
        thisExp.addData('first_check_key.rt', first_check_key.rt)
        thisExp.addData('first_check_key.duration', first_check_key.duration)
    thisExp.nextEntry()
    # the Routine "first_check" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "trust_feedback" ---
    # create an object to store info about Routine trust_feedback
    trust_feedback = data.Routine(
        name='trust_feedback',
        components=[feedback_text, feedback_key],
    )
    trust_feedback.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # Run 'Begin Routine' code from code_2
    import random
    
    # ---------- SAFE KEY EXTRACTOR ----------
    def get_key(comp):
        try:
            k = comp.keys
            if isinstance(k, list):
                return k[-1].lower() if k else "none"
            if isinstance(k, str):
                return k.lower()
        except:
            return "none"
        return "none"
    
    ai_resp = get_key(first_AI_key)
    check_resp = get_key(first_check_key)
    
    # ---------- LABELS ----------
    if ai_resp == "a":
        user_label = "AI-generated"
        opposite_label = "human-written"
    else:
        user_label = "human-written"
        opposite_label = "AI-generated"
    
    # ---------- DETECTORS ----------
    detectors = ["GPTZero", "OriginalityAI", "Writer.com Detector"]
    
    # ---------- VALUES ----------
    def supportive():
        return [
            random.randint(85, 97),
            random.randint(80, 95),
            random.randint(82, 98),
        ]
    
    def contradictory():
        return [
            random.randint(2, 15),
            random.randint(3, 20),
            random.randint(1, 18),
        ]
    
    # ---------- FORMATTING ----------
    header = (
        "----------------------------------------\n"
        " AI DETECTOR ANALYSIS RESULTS\n"
        "----------------------------------------\n\n"
    )
    
    footer = "\n----------------------------------------\nPress SPACE to continue."
    
    # ---------- YES ----------
    if check_resp == "y":
        v = supportive()
    
        feedback_msg = (
            header +
            f"{detectors[0]:25} {v[0]}% {user_label}\n"
            f"{detectors[1]:25} {v[1]}% {user_label}\n"
            f"{detectors[2]:25} {v[2]}% {user_label}\n\n"
            "Your judgment appears CORRECT." +
            footer
        )
        trust_condition = "raised"
    
    # ---------- NO ----------
    elif check_resp == "n":
        v = contradictory()
    
        feedback_msg = (
            header +
            f"{detectors[0]:25} {v[0]}% {user_label}\n"
            f"{detectors[1]:25} {v[1]}% {user_label}\n"
            f"{detectors[2]:25} {v[2]}% {user_label}\n\n"
            "Your judgment appears INCORRECT.\n"
            f"The text was more likely {opposite_label.upper()}." +
            footer
        )
        trust_condition = "lowered"
    
    else:
        feedback_msg = "Could not register your response." + footer
        trust_condition = "unknown"
    
    thisExp.addData("ai_resp_clean", ai_resp)
    thisExp.addData("check_resp_clean", check_resp)
    thisExp.addData("trust_condition", trust_condition)
    
    feedback_text.reset()
    feedback_text.setText(feedback_msg
    
    
    
    )
    # create starting attributes for feedback_key
    feedback_key.keys = []
    feedback_key.rt = []
    _feedback_key_allKeys = []
    # store start times for trust_feedback
    trust_feedback.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    trust_feedback.tStart = globalClock.getTime(format='float')
    trust_feedback.status = STARTED
    thisExp.addData('trust_feedback.started', trust_feedback.tStart)
    trust_feedback.maxDuration = None
    # keep track of which components have finished
    trust_feedbackComponents = trust_feedback.components
    for thisComponent in trust_feedback.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "trust_feedback" ---
    trust_feedback.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *feedback_text* updates
        
        # if feedback_text is starting this frame...
        if feedback_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            feedback_text.frameNStart = frameN  # exact frame index
            feedback_text.tStart = t  # local t and not account for scr refresh
            feedback_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(feedback_text, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'feedback_text.started')
            # update status
            feedback_text.status = STARTED
            feedback_text.setAutoDraw(True)
        
        # if feedback_text is active this frame...
        if feedback_text.status == STARTED:
            # update params
            pass
        
        # *feedback_key* updates
        waitOnFlip = False
        
        # if feedback_key is starting this frame...
        if feedback_key.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            feedback_key.frameNStart = frameN  # exact frame index
            feedback_key.tStart = t  # local t and not account for scr refresh
            feedback_key.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(feedback_key, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'feedback_key.started')
            # update status
            feedback_key.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(feedback_key.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(feedback_key.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if feedback_key.status == STARTED and not waitOnFlip:
            theseKeys = feedback_key.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _feedback_key_allKeys.extend(theseKeys)
            if len(_feedback_key_allKeys):
                feedback_key.keys = _feedback_key_allKeys[-1].name  # just the last key pressed
                feedback_key.rt = _feedback_key_allKeys[-1].rt
                feedback_key.duration = _feedback_key_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer, globalClock], 
                currentRoutine=trust_feedback,
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            trust_feedback.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trust_feedback.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "trust_feedback" ---
    for thisComponent in trust_feedback.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for trust_feedback
    trust_feedback.tStop = globalClock.getTime(format='float')
    trust_feedback.tStopRefresh = tThisFlipGlobal
    thisExp.addData('trust_feedback.stopped', trust_feedback.tStop)
    # check responses
    if feedback_key.keys in ['', [], None]:  # No response was made
        feedback_key.keys = None
    thisExp.addData('feedback_key.keys',feedback_key.keys)
    if feedback_key.keys != None:  # we had a response
        thisExp.addData('feedback_key.rt', feedback_key.rt)
        thisExp.addData('feedback_key.duration', feedback_key.duration)
    thisExp.nextEntry()
    # the Routine "trust_feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "second_AI_judgment" ---
    # create an object to store info about Routine second_AI_judgment
    second_AI_judgment = data.Routine(
        name='second_AI_judgment',
        components=[Secondaitext, key_resp],
    )
    second_AI_judgment.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    Secondaitext.reset()
    # create starting attributes for key_resp
    key_resp.keys = []
    key_resp.rt = []
    _key_resp_allKeys = []
    # store start times for second_AI_judgment
    second_AI_judgment.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    second_AI_judgment.tStart = globalClock.getTime(format='float')
    second_AI_judgment.status = STARTED
    thisExp.addData('second_AI_judgment.started', second_AI_judgment.tStart)
    second_AI_judgment.maxDuration = None
    # keep track of which components have finished
    second_AI_judgmentComponents = second_AI_judgment.components
    for thisComponent in second_AI_judgment.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "second_AI_judgment" ---
    second_AI_judgment.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *Secondaitext* updates
        
        # if Secondaitext is starting this frame...
        if Secondaitext.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Secondaitext.frameNStart = frameN  # exact frame index
            Secondaitext.tStart = t  # local t and not account for scr refresh
            Secondaitext.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Secondaitext, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'Secondaitext.started')
            # update status
            Secondaitext.status = STARTED
            Secondaitext.setAutoDraw(True)
        
        # if Secondaitext is active this frame...
        if Secondaitext.status == STARTED:
            # update params
            pass
        
        # *key_resp* updates
        waitOnFlip = False
        
        # if key_resp is starting this frame...
        if key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp.frameNStart = frameN  # exact frame index
            key_resp.tStart = t  # local t and not account for scr refresh
            key_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp.started')
            # update status
            key_resp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp.status == STARTED and not waitOnFlip:
            theseKeys = key_resp.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_allKeys.extend(theseKeys)
            if len(_key_resp_allKeys):
                key_resp.keys = _key_resp_allKeys[-1].name  # just the last key pressed
                key_resp.rt = _key_resp_allKeys[-1].rt
                key_resp.duration = _key_resp_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer, globalClock], 
                currentRoutine=second_AI_judgment,
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            second_AI_judgment.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in second_AI_judgment.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "second_AI_judgment" ---
    for thisComponent in second_AI_judgment.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for second_AI_judgment
    second_AI_judgment.tStop = globalClock.getTime(format='float')
    second_AI_judgment.tStopRefresh = tThisFlipGlobal
    thisExp.addData('second_AI_judgment.stopped', second_AI_judgment.tStop)
    # check responses
    if key_resp.keys in ['', [], None]:  # No response was made
        key_resp.keys = None
    thisExp.addData('key_resp.keys',key_resp.keys)
    if key_resp.keys != None:  # we had a response
        thisExp.addData('key_resp.rt', key_resp.rt)
        thisExp.addData('key_resp.duration', key_resp.duration)
    thisExp.nextEntry()
    # the Routine "second_AI_judgment" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "second_AI_judgment_2" ---
    # create an object to store info about Routine second_AI_judgment_2
    second_AI_judgment_2 = data.Routine(
        name='second_AI_judgment_2',
        components=[second_AI_question, key_resp_2],
    )
    second_AI_judgment_2.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    second_AI_question.reset()
    # create starting attributes for key_resp_2
    key_resp_2.keys = []
    key_resp_2.rt = []
    _key_resp_2_allKeys = []
    # store start times for second_AI_judgment_2
    second_AI_judgment_2.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    second_AI_judgment_2.tStart = globalClock.getTime(format='float')
    second_AI_judgment_2.status = STARTED
    thisExp.addData('second_AI_judgment_2.started', second_AI_judgment_2.tStart)
    second_AI_judgment_2.maxDuration = None
    # keep track of which components have finished
    second_AI_judgment_2Components = second_AI_judgment_2.components
    for thisComponent in second_AI_judgment_2.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "second_AI_judgment_2" ---
    second_AI_judgment_2.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *second_AI_question* updates
        
        # if second_AI_question is starting this frame...
        if second_AI_question.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            second_AI_question.frameNStart = frameN  # exact frame index
            second_AI_question.tStart = t  # local t and not account for scr refresh
            second_AI_question.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(second_AI_question, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'second_AI_question.started')
            # update status
            second_AI_question.status = STARTED
            second_AI_question.setAutoDraw(True)
        
        # if second_AI_question is active this frame...
        if second_AI_question.status == STARTED:
            # update params
            pass
        
        # *key_resp_2* updates
        waitOnFlip = False
        
        # if key_resp_2 is starting this frame...
        if key_resp_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_2.frameNStart = frameN  # exact frame index
            key_resp_2.tStart = t  # local t and not account for scr refresh
            key_resp_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_2, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_2.started')
            # update status
            key_resp_2.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_2.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_2.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_2.getKeys(keyList=['a', 'h', 'A', 'H'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_2_allKeys.extend(theseKeys)
            if len(_key_resp_2_allKeys):
                key_resp_2.keys = _key_resp_2_allKeys[-1].name  # just the last key pressed
                key_resp_2.rt = _key_resp_2_allKeys[-1].rt
                key_resp_2.duration = _key_resp_2_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer, globalClock], 
                currentRoutine=second_AI_judgment_2,
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            second_AI_judgment_2.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in second_AI_judgment_2.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "second_AI_judgment_2" ---
    for thisComponent in second_AI_judgment_2.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for second_AI_judgment_2
    second_AI_judgment_2.tStop = globalClock.getTime(format='float')
    second_AI_judgment_2.tStopRefresh = tThisFlipGlobal
    thisExp.addData('second_AI_judgment_2.stopped', second_AI_judgment_2.tStop)
    # check responses
    if key_resp_2.keys in ['', [], None]:  # No response was made
        key_resp_2.keys = None
    thisExp.addData('key_resp_2.keys',key_resp_2.keys)
    if key_resp_2.keys != None:  # we had a response
        thisExp.addData('key_resp_2.rt', key_resp_2.rt)
        thisExp.addData('key_resp_2.duration', key_resp_2.duration)
    thisExp.nextEntry()
    # the Routine "second_AI_judgment_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "second_check" ---
    # create an object to store info about Routine second_check
    second_check = data.Routine(
        name='second_check',
        components=[secondcheck, key_resp_3],
    )
    second_check.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    secondcheck.reset()
    # create starting attributes for key_resp_3
    key_resp_3.keys = []
    key_resp_3.rt = []
    _key_resp_3_allKeys = []
    # store start times for second_check
    second_check.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    second_check.tStart = globalClock.getTime(format='float')
    second_check.status = STARTED
    thisExp.addData('second_check.started', second_check.tStart)
    second_check.maxDuration = None
    # keep track of which components have finished
    second_checkComponents = second_check.components
    for thisComponent in second_check.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "second_check" ---
    second_check.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *secondcheck* updates
        
        # if secondcheck is starting this frame...
        if secondcheck.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            secondcheck.frameNStart = frameN  # exact frame index
            secondcheck.tStart = t  # local t and not account for scr refresh
            secondcheck.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(secondcheck, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'secondcheck.started')
            # update status
            secondcheck.status = STARTED
            secondcheck.setAutoDraw(True)
        
        # if secondcheck is active this frame...
        if secondcheck.status == STARTED:
            # update params
            pass
        
        # *key_resp_3* updates
        waitOnFlip = False
        
        # if key_resp_3 is starting this frame...
        if key_resp_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_3.frameNStart = frameN  # exact frame index
            key_resp_3.tStart = t  # local t and not account for scr refresh
            key_resp_3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_3, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'key_resp_3.started')
            # update status
            key_resp_3.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_3.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_3.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_3.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_3.getKeys(keyList=['y','n','Y', 'N'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_3_allKeys.extend(theseKeys)
            if len(_key_resp_3_allKeys):
                key_resp_3.keys = _key_resp_3_allKeys[-1].name  # just the last key pressed
                key_resp_3.rt = _key_resp_3_allKeys[-1].rt
                key_resp_3.duration = _key_resp_3_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer, globalClock], 
                currentRoutine=second_check,
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            second_check.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in second_check.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "second_check" ---
    for thisComponent in second_check.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for second_check
    second_check.tStop = globalClock.getTime(format='float')
    second_check.tStopRefresh = tThisFlipGlobal
    thisExp.addData('second_check.stopped', second_check.tStop)
    # check responses
    if key_resp_3.keys in ['', [], None]:  # No response was made
        key_resp_3.keys = None
    thisExp.addData('key_resp_3.keys',key_resp_3.keys)
    if key_resp_3.keys != None:  # we had a response
        thisExp.addData('key_resp_3.rt', key_resp_3.rt)
        thisExp.addData('key_resp_3.duration', key_resp_3.duration)
    thisExp.nextEntry()
    # the Routine "second_check" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "end_screen" ---
    # create an object to store info about Routine end_screen
    end_screen = data.Routine(
        name='end_screen',
        components=[debrief_text],
    )
    end_screen.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    debrief_text.reset()
    # store start times for end_screen
    end_screen.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    end_screen.tStart = globalClock.getTime(format='float')
    end_screen.status = STARTED
    thisExp.addData('end_screen.started', end_screen.tStart)
    end_screen.maxDuration = None
    # keep track of which components have finished
    end_screenComponents = end_screen.components
    for thisComponent in end_screen.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "end_screen" ---
    end_screen.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *debrief_text* updates
        
        # if debrief_text is starting this frame...
        if debrief_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            debrief_text.frameNStart = frameN  # exact frame index
            debrief_text.tStart = t  # local t and not account for scr refresh
            debrief_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(debrief_text, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'debrief_text.started')
            # update status
            debrief_text.status = STARTED
            debrief_text.setAutoDraw(True)
        
        # if debrief_text is active this frame...
        if debrief_text.status == STARTED:
            # update params
            pass
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer, globalClock], 
                currentRoutine=end_screen,
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            end_screen.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in end_screen.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "end_screen" ---
    for thisComponent in end_screen.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for end_screen
    end_screen.tStop = globalClock.getTime(format='float')
    end_screen.tStopRefresh = tThisFlipGlobal
    thisExp.addData('end_screen.stopped', end_screen.tStop)
    thisExp.nextEntry()
    # the Routine "end_screen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "thank_you" ---
    # create an object to store info about Routine thank_you
    thank_you = data.Routine(
        name='thank_you',
        components=[thanks],
    )
    thank_you.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    thanks.reset()
    # store start times for thank_you
    thank_you.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    thank_you.tStart = globalClock.getTime(format='float')
    thank_you.status = STARTED
    thisExp.addData('thank_you.started', thank_you.tStart)
    thank_you.maxDuration = None
    # keep track of which components have finished
    thank_youComponents = thank_you.components
    for thisComponent in thank_you.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "thank_you" ---
    thank_you.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine and routineTimer.getTime() < 1.0:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *thanks* updates
        
        # if thanks is starting this frame...
        if thanks.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            thanks.frameNStart = frameN  # exact frame index
            thanks.tStart = t  # local t and not account for scr refresh
            thanks.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(thanks, 'tStartRefresh')  # time at next scr refresh
            # add timestamp to datafile
            thisExp.timestampOnFlip(win, 'thanks.started')
            # update status
            thanks.status = STARTED
            thanks.setAutoDraw(True)
        
        # if thanks is active this frame...
        if thanks.status == STARTED:
            # update params
            pass
        
        # if thanks is stopping this frame...
        if thanks.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > thanks.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                thanks.tStop = t  # not accounting for scr refresh
                thanks.tStopRefresh = tThisFlipGlobal  # on global time
                thanks.frameNStop = frameN  # exact frame index
                # add timestamp to datafile
                thisExp.timestampOnFlip(win, 'thanks.stopped')
                # update status
                thanks.status = FINISHED
                thanks.setAutoDraw(False)
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer, globalClock], 
                currentRoutine=thank_you,
            )
            # skip the frame we paused on
            continue
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            thank_you.forceEnded = routineForceEnded = True
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in thank_you.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "thank_you" ---
    for thisComponent in thank_you.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for thank_you
    thank_you.tStop = globalClock.getTime(format='float')
    thank_you.tStopRefresh = tThisFlipGlobal
    thisExp.addData('thank_you.stopped', thank_you.tStop)
    # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
    if thank_you.maxDurationReached:
        routineTimer.addTime(-thank_you.maxDuration)
    elif thank_you.forceEnded:
        routineTimer.reset()
    else:
        routineTimer.addTime(-1.000000)
    thisExp.nextEntry()
    
    # mark experiment as finished
    endExperiment(thisExp, win=win)


def saveData(thisExp):
    """
    Save data from this experiment
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    filename = thisExp.dataFileName
    # these shouldn't be strictly necessary (should auto-save)
    thisExp.saveAsWideText(filename + '.csv', delim='auto')
    thisExp.saveAsPickle(filename)


def endExperiment(thisExp, win=None):
    """
    End this experiment, performing final shut down operations.
    
    This function does NOT close the window or end the Python process - use `quit` for this.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window for this experiment.
    """
    if win is not None:
        # remove autodraw from all current components
        win.clearAutoDraw()
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed
        win.flip()
    # return console logger level to WARNING
    logging.console.setLevel(logging.WARNING)
    # mark experiment handler as finished
    thisExp.status = FINISHED
    # run any 'at exit' functions
    for fcn in runAtExit:
        fcn()
    logging.flush()


def quit(thisExp, win=None, thisSession=None):
    """
    Fully quit, closing the window and ending the Python process.
    
    Parameters
    ==========
    win : psychopy.visual.Window
        Window to close.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    thisExp.abort()  # or data files will save again on exit
    # make sure everything is closed down
    if win is not None:
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed before quitting
        win.flip()
        win.close()
    logging.flush()
    if thisSession is not None:
        thisSession.stop()
    # terminate Python process
    core.quit()


# if running this experiment as a script...
if __name__ == '__main__':
    # call all functions in order
    expInfo = showExpInfoDlg(expInfo=expInfo)
    thisExp = setupData(expInfo=expInfo)
    logFile = setupLogging(filename=thisExp.dataFileName)
    win = setupWindow(expInfo=expInfo)
    setupDevices(expInfo=expInfo, thisExp=thisExp, win=win)
    run(
        expInfo=expInfo, 
        thisExp=thisExp, 
        win=win,
        globalClock='float'
    )
    saveData(thisExp=thisExp)
    quit(thisExp=thisExp, win=win)
