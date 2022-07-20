/* This file will contain different instructions that will be used 
throughout the study but were a hassle to keep in the index file. 
*/
var consent_from = "<DIV align='left'><div>&nbsp;</div><div>Please consider this information carefully before deciding whether to participate in this research.</div><div>&nbsp;\<div>The purpose of this research is to examine which factors influence social judgment and decision-</div><div>making.You will be asked to make judgements about individuals and actions in social scenarios.</div><div>We are simply interested in your judgement. The study will take less than 1 hour to complete,</div><div>and you will receive less than $20 on Prolific. Your compensation and time</div><div>commitment are specified in the study description. There are no anticipated risks associated with</div><div>participating in this study. The effects of participating should be comparable to those you would</div><div>ordinarily experience from viewing a computer monitor and using a mouse or keyboard for a</div><div>similar amount of time. At the end of the study, we will provide an explanation of the questions</div><div>that motivate this line of research and will describe the potential implications.</div><div>&nbsp;</div><div>Your participation in this study is completely voluntary and you may refuse to participate or you</div><div>may choose to withdraw at any time without penalty or loss of benefits to you which are</div><div>otherwise entitled. Your participation in this study will remain confidential. No personally</div><div>identifiable information will be associated with your data. Also, all analyses of the data will be</div><div>averaged across all the participants, so your individual responses will never be specifically</div><div>analyzed.</div><div>&nbsp;</div><div>If you have questions or concerns about your participation or payment, or want to request a</div><div>summary of research findings, please contact Dr. Jonathan Phillips at</div><div><a href=mailto:Jonathan.S.Phillips@dartmouth.edu>Jonathan.S.Phillips@dartmouth.edu</a>.</div><div>&nbsp;</div><div>Please save a copy of this form for your records.</div><div>&nbsp;</div></DIV><div>Agreement:</div><DIV align='left'><div>The nature and purpose of this research have been sufficiently explained and I agree to</div><div>participate in this study. I understand that I am free to withdraw at any time without incurring</div><div>any penalty. Please consent by clicking the button below to continue. Otherwise, please exit the</div><div>study at any time.</div><div>&nbsp;</div></DIV>"

var video_instructions = '<p style="font-size:18px; color:black">In the following section, you will be presented a video and asked to answer questions.<br>'
+'Once the video loads, please press play. Watch the video only once, before pressing continue.</p>'; 

var pos_video_instructions='<p style="font-size:18px; color:black">You will now be presented several questions about the video you watched.<br>'
+'Answer the question by pressing the corresponding button on the screen. </p>'; 

var pre_instruction_trial = '<p style="font-size:18px; color:black"> To get you accustomed to this set up, we will now do a brief training session. </br> <b> Please press continue when you are ready to proceed. </b></p>'

var general_instructions = '<p style="font-size:18px; color:black"> In this experiment you will watch a series of videos and answer 3 yes/no questions after each video. You will watch every video once, starting each by manually pressing play. The questions will be auto-paced and we ask that you respond to each as quickly as possible. To quickly respond, place your fingers over the ‘F’ and ‘J’ keys. F indicates a yes response. J indicates no response. <br><br> <b> Please click continue. </b>';
var post_video_instructions = '<p style="font-size:18px; color:black; margin: 50px;"> You will now be shown a series of yes no questions. Please place your index fingers on F and J. Press F for ‘Yes’ and J for ‘No’. Answer as quickly as possible. <br/> Remember the questions will be auto-paced. If you do not answer in the allotted [15] seconds, you will not have an opportunity to re-answer. </br> <b> Press the spacebar when you are ready to proceed. </b>';
// p = yes, q = no
var instruction_trial = {
    "Does Jill want to go kayaking tomorrow? ": "j", 
    "Does Jack play the guitar? ": "j",
    "Was the moon was full?": "f",
} 

var post_instruction_script = '<p style="font-size:18px; color:black; margin: 50px;"> Great job! We will now proceed to the actual experiment. </br> <b> Press continue when you are ready to proceed. <b>';

