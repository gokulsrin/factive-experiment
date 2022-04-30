/* This file will contain different instructions that will be used 
throughout the study but were a hassle to keep in the index file. 
*/

var video_instructions = '<p style="font-size:18px; color:black">In the following section, you will be presented a video and asked to answer questions.<br>'
+'Once the video loads, please press play. Watch the video only once, before pressing continue.</p>'; 

var pos_video_instructions='<p style="font-size:18px; color:black">You will now be presented several questions about the video you watched.<br>'
+'Answer the question by pressing the corresponding button on the screen. </p>'; 

var study_description = ' Study description';

var practice_trial_instructions = '<p style="font-size:18px; color:black"> In this experiment you will watch a series of videos and answer 3 yes/no questions after each video. You will watch every video once, starting each by manually pressing play. The questions will be auto-paced and we ask that you respond to each as quickly as possible. To quickly respond, place your fingers over the ‘F’ and ‘J’ keys. F indicates a yes response. J indicates no response. In between each question you will be shown a plus sign to indicate the next question is about to appear.<br><br> <b> Please click continue. </b>';
var post_video_instructions = '<p style="font-size:18px; color:black; margin: 50px;"> You will now be shown a series of yes no questions. Please place your index fingers on F and J. Press F for ‘Yes’ and J for ‘No’. Answer as quickly as possible. <br/> Remember the questions will be auto-paced. If you do not answer in the allotted [15] seconds, you will not have an opportunity to re-answer. </br> <b> Press the spacebar when you are ready to proceed. </b>';
// p = yes, q = no
var instruction_trial = {
    "Does Jill want to go kayaking tomorrow? ": "q", 
    "Does Jack play the guitar? ": "q",
    "Was the moon was full?": "p",
} 

var post_instruction_script = '<p style="font-size:18px; color:black; margin: 50px;"> Great job! We will now proceed to the actual experiment. </br> <b> Press continue when you are ready to proceed. <b>';