// this file will contain all of the filler and target questions 

var pirate_filler = {'Are Marias shoes green?': ['Pirate_Filler_9', 'Y'],
'Are there palm trees?': ['Pirate_Filler_6', 'Y'],
'Are there three hammocks?': ['Pirate_Filler_5', 'N'],
'Does Maria have blonde hair? ': ['Pirate_Filler_10', 'N'],
'Does the Captain have a beard? ': ['Pirate_Filler_2', 'Y'],
'Does the tree house have 4 levels?': ['Pirate_Filler_7', 'N'],
'Is it raining?': ['Pirate_Filler_4', 'N'],
'Is the Captain’s uniform blue?': ['Pirate_Filler_1', 'Y'],
'Is there a cannon?': ['Pirate_Filler_8', 'Y'],
'Is there a pig roasting on the fire?': ['Pirate_Filler_3', 'N']}

var spy_filler = {'Are there keyboards in the control room?': ['Spy_Filler_10', 'Y'],
'Are there stairs in the control room?': ['Spy_Filler_8', 'Y'],
'Are there two chairs in the command room?': ['Spy_Filler_6', 'N'],
'Are there two rockets?': ['Spy_Filler_1', 'N'],
'Is Commander Greenville’s uniform blue?': ['Spy_Filler_3', 'N'],
'Is Lieutenant Jack wearing a watch?': ['Spy_Filler_5', 'Y'],
'Is Major Bryant Bald?': ['Spy_Filler_4', 'Y'],
'Is the command room floor brown?': ['Spy_Filler_7', 'N'],
'Is there a dog in the command room?\n': ['Spy_Filler_9', 'N'],
'Is there a window in the control room?': ['Spy_Filler_2', 'N']}

var school_filler = {'Are Dr. C’s shoes red?': ['School_Filler_7', 'N'],
'Are the students sitting in a circle?': ['School_Filler_10', 'N'],
"Are the walls in Dr. C's classroom yellow?": ['School_Filler_3', 'N'],
'Are there curtains in the classroom window?': ['School_Filler_6', 'N'],
'Are there two tables in the history classroom?': ['School_Filler_1', 'Y'],
'Is Janes shirt yellow?': ['School_Filler_4', 'N'],
"Is there a globe in Dr. C's classroom?": ['School_Filler_9', 'Y'],
"Is there a plant in Dr. C's classroom?": ['School_Filler_2', 'Y'],
"Is there a timeline in Dr. C's classroom?": ['School_Filler_8', 'Y']}

// target question dictionary 
var target_questions = {
'Pirate': {
    'AI': {'Does Harry know where Maria is?': ['Pirate_Alter_2', 'N'],'Does the Captain know where Maria is?': ['Pirate_Alter_1', 'N']},
    'EI': {'Does Harry know where Maria is?': ['Pirate_Ego_2', 'N'],'Does the Captain know where Maria is?': ['Pirate_Ego_1', 'Y']},
    'FB': {'Does Harry know where Maria is?': ['Pirate_FB_2', 'N'],'Does the Captain know where Maria is?': ['Pirate_FB_1', 'N']},
    'G': {'Does Harry know where Maria is?': ['Pirate_Gettier_2', 'Y'],'Does the Captain know where Maria is?': ['Pirate_Gettier_1', 'Y']},
    'NI': {'Does Harry know where Maria is?': ['Pirate_NS_2', 'N'],'Does the Captain know where Maria is? ': ['Pirate_NS_1', 'N']},
    'TB': {'Does Harry know where Maria is?': ['Pirate_TB_2', 'N'],'Does the Captain know where Maria is?': ['Pirate_TB_1', 'Y']}
    },
'School': {
    'AI': {'Does Dr. C know where Billy is?': ['School_Alter_1', 'N'],'Does Jane know where Billy is?': ['School_Alter_2', 'N']},
    'EI': {'Does Dr. C know where Billy is?': ['School_Ego_1', 'Y'],'Does Jane know where Billy is?': ['School_Ego_2', 'N']},
    'FB': {'Does Dr. C know where Billy is?': ['School_FB_1', 'N'],'Does Jane know where Billy is? ': ['School_FB_2', 'N']},
    'G': {'Does Dr. C know where Billy is?': ['School_Gettier_1', 'Y'],'Does Jane know where Billy is?': ['School_Gettier_2', 'Y']},
    'NI': {'Does Dr. C know where Billy is?': ['School_NS_1', 'N'],'Does Jane know where Billy is?': ['School_NS_2', 'N']},
    'TB': {'Does Dr. C know where Billy is?': ['School_TB_1', 'Y'],'Does Jane know where Billy is?': ['School_TB_2', 'N']}},
'Spy': {
    'AI': {'Does Lieutenant Jack know where Commander Greenville is?': ['Spy_Alter_1','N'],'Does Major Bryant know where Commander Greenville is?': ['Spy_Alter_2','N']},
    'EI': {'Does Lieutenant Jack know where Commander Greenville is? ': ['Spy_Ego_1','N'],'Does Major Bryant know where Commander Greenville is?': ['Spy_Ego_2','Y']},
    'FB': {'Does Lieutenant Jack know where Commander Greenville is?': ['Spy_FB_1','N'],'Does Major Bryant know where Commander Greenville is?': ['Spy_FB_2', 'N']},
    'G': {'Does Lieutenant Jack know where Commander Greenville is?': ['Spy_Gettier_1','Y'],'Does Major Bryant know where Commander Greenville is? ': ['Spy_Gettier_2','Y']},
    'NI': {'Does Lieutenant Jack know where Commander Greenville is? ': ['Spy_NS_1','N'],'Does Major Bryant know where Commander Greenville is?': ['Spy_NS_2', 'N']},
    'TB': {'Does Lieutenant Jack know where Commander Greenville is? ': ['Spy_TB_1','N'],'Does Major Bryant know where Commander Greenville is?': ['Spy_TB_2','Y']}
    }
}