const test = [{ id: 1, test: 'test', description: 'description' }];

const types = [
	{
		archetype_id: 1,
		drive: 'leave a mark',
		aspect: 'ego',
		method: 'mastery',
		shadow: 'end justify the means',
		name: 'warrior',
		alias: 'hero',
		role: 'student',
		color: 'red'
	},
	{
		archetype_id: 2,
		drive: 'spiritual journey',
		aspect: 'soul',
		method: 'freedom',
		shadow: 'getting lost',
		name: 'explorer',
		alias: 'wanderer',
		role: 'outlier',
		color: 'orangered'
	},
	{
		archetype_id: 3,
		drive: 'order',
		aspect: 'soul',
		method: 'innovation',
		shadow: 'critic (nothing ever good enough)',
		name: 'creator',
		alias: 'artist',
		role: 'outlier',
		color: 'orange'
	},
	{
		archetype_id: 4,
		drive: 'connect with others',
		aspect: 'soul',
		method: 'intimacy',
		shadow: 'selfishness',
		name: 'lover',
		alias: 'none',
		role: 'outlier',
		color: 'gold'
	},
	{
		archetype_id: 5,
		drive: 'leave a mark',
		aspect: 'soul',
		method: 'liberation',
		shadow: 'indiffernce/cruelty',
		name: 'rebel',
		alias: 'outlaw/revolutionary',
		role: 'outlier',
		color: 'yellow'
	},
	{
		archetype_id: 6,
		drive: 'spiritual journey',
		aspect: 'self',
		method: 'hiding truth',
		shadow: 'believing/becoming the lie',
		name: 'trickster',
		alias: 'jester',
		role: 'student',
		color: 'yellowgreen'
	},
	{
		archetype_id: 7,
		drive: 'spiritual journey',
		aspect: 'self',
		method: 'knowledge',
		shadow: 'arrogance',
		name: 'mentor',
		alias: 'sage',
		role: 'master',
		color: 'green'
	},
	{
		archetype_id: 8,
		drive: 'order',
		aspect: 'self',
		method: 'power',
		shadow: 'abuse of power',
		name: 'magician',
		alias: 'wizard',
		role: 'master',
		color: 'cadetblue'
	},
	{
		archetype_id: 9,
		drive: 'leave a mark',
		aspect: 'self',
		method: 'control',
		shadow: 'tyrant',
		name: 'ruler',
		alias: 'king/father',
		role: 'master',
		color: 'blue'
	},
	{
		archetype_id: 10,
		drive: 'connect with others',
		aspect: 'ego',
		method: 'service',
		shadow: 'martyr',
		name: 'caregiver',
		alias: 'queen/mother',
		role: 'master',
		color: 'blueviolet'
	},
	{
		archetype_id: 11,
		drive: 'order',
		aspect: 'ego',
		method: 'safety',
		shadow: 'refusal of responsibility',
		name: 'innocent',
		alias: 'none',
		role: 'student',
		color: 'indigo'
	},
	{
		archetype_id: 12,
		drive: 'connect with others',
		aspect: 'ego',
		method: 'fitting in',
		shadow: 'mediocrity',
		name: 'orphan',
		alias: 'everyman/everyperson',
		role: 'student',
		color: 'purple'
	}
];

const wheel = {
	1: { 3: 2, 5: 3, 7: 4, 9: 11, 11: 12 },
	2: { 4: 3, 6: 5, 8: 5, 10: 12, 12: 1 },
	3: { 5: 4, 7: 5, 9: 6, 11: 1, 1: 2 },
	4: { 6: 5, 8: 6, 10: 7, 12: 2, 2: 3 },
	5: { 7: 6, 9: 7, 11: 8, 1: 3, 3: 4 },
	6: { 8: 7, 10: 8, 12: 9, 2: 4, 4: 5 },
	7: { 9: 8, 11: 9, 1: 10, 3: 5, 6: 5 },
	8: { 10: 9, 12: 10, 2: 11, 4: 6, 6: 7 },
	9: { 11: 10, 1: 11, 3: 12, 5: 7, 7: 8 },
	10: { 12: 11, 2: 12, 4: 1, 6: 8, 8: 9 },
	11: { 1: 12, 3: 1, 5: 2, 7: 9, 9: 10 },
	12: { 2: 1, 4: 2, 6: 3, 8: 10, 10: 11 }
};

const allyMatrix = {
	'leave a mark': 'order',
	order: 'leave a mark',
	'connect with others': 'spiritual journey',
	'spiritual journey': 'connect with others'
};

const drama = [
	{
		drama_id: 1,
		name: 'supplication',
		alias: null,
		description: 'asking or begging for something earnestly or humbly',
		scenario: {
			1: 'fugitive asks for help',
			2: 'exile begs for re-entry',
			3: 'restore the family name',
			4: 'mercy for breaking the code',
			5: 'adulterer begs forgiveness'
		},
		common: null
	},
	{
		drama_id: 2,
		name: 'deliverance',
		alias: 'rescue - redemption - salvation - acquittal',
		description:
			'being rescued, saved, or set free from something dangerous or unpleasant',
		scenario: {
			1: 'the unexpected arrival of a protector to rescue the distressed'
		},
		common: 44
	},
	{
		drama_id: 3,
		name: 'revenge following a crime',
		alias: null,
		description: 'the desire or act of repaying a wrong',
		scenario: {
			1: 'revenge for murder of loved one',
			2: 'revenge for dishonour or deflowering of loved one',
			3: 'revenge for destruction of reputation',
			4: 'revenge on gender for crime of the individual',
			5: 'revenge on race for crime of the individual',
			6: 'revenge via karma'
		},
		common: 48
	},
	{
		drama_id: 4,
		name: 'revenge contained within a family',
		alias: null,
		description:
			'the culmination of the negative emotions that run hot within familial structures',
		scenario: {
			1: 'struggle for familial power',
			2: 'revenge for missing approval',
			3: 'revenge for absence',
			4: 'the black sheep',
			5: 'infidelity',
			6: 'in-laws'
		},
		common: null
	},
	{
		drama_id: 5,
		name: 'the pursued',
		alias: 'the fugative - the outsider',
		description: 'to be on one side of the chase or hunt',
		scenario: {
			1: 'fugative from justice',
			2: 'fugative of love',
			3: 'hero in exile',
			4: 'the alienated hero'
		},
		common: 43
	},
	{
		drama_id: 6,
		name: 'disaster',
		alias: null,
		description:
			'sudden event or fact that causes catastrohpic fallout of psychologic or physical nature',
		scenario: {
			1: 'reversal of fortune',
			2: 'overthrown leader or system',
			3: 'loss of a loved one',
			4: 'natural disaster',
			5: 'disasters of love'
		},
		common: null
	},
	{
		drama_id: 7,
		name: 'cruelty and misfortune',
		alias: null,
		description: 'desire or act of causing others to suffer',
		scenario: {
			1: 'the sacrificed pawn',
			2: 'cruelty of own protectors',
			3: 'deliberate heartbreak',
			4: 'destroying the last hope of the desperate',
			5: 'losing the affection of the group',
			6: 'losing the affection of a loved one',
			7: 'deprived of love as punishment for betrayal',
			8: 'unjust punishment',
			9: 'unnoticed, unappreciated sacrifice'
		},
		common: 40
	},
	{
		drama_id: 8,
		name: 'revolt',
		alias: null,
		description: 'action against or refusal to acknowledge an authority',
		scenario: {
			1: 'oppressor and oppressed',
			2: 'tryant and victim',
			3: 'powerful and weak',
			4: 'whistleblower',
			5: 'stand against corruption',
			6: 'leaders unite against a common enemy'
		},
		common: null
	},
	{
		drama_id: 9,
		name: 'daring enterprise',
		alias: 'brave adventure',
		description: 'facing the impossible problem against all odds',
		scenario: {
			1: 'tactical problem',
			2: 'heist',
			3: 'ticking clock',
			4: 'small group of extraordinary',
			5: 'unselfish risk',
			6: 'united by loyalty'
		},
		common: 48
	},
	{
		drama_id: 10,
		name: 'abduction',
		alias: null,
		description: 'taking someone against their will',
		scenario: {
			1: 'abduction of the unwilling',
			2: 'abduction of the willing',
			3: 'rescue of the abducted'
		},
		common: null
	},
	{
		drama_id: 11,
		name: 'the enigma',
		alias: null,
		description:
			'person, thing, or situation that is mysterious or difficult to understand',
		scenario: {
			1: 'solving the puzzle to save a live',
			2: 'solving the puzzle to save own life',
			3: 'solving puzzle to save world',
			4: 'solving the next big leap',
			5: 'meaning of life',
			6: 'mystery of the sins of the past',
			7: 'death reveals a mysterious past'
		},
		common: 38
	},
	{
		drama_id: 12,
		name: 'obtaining',
		alias: null,
		description: 'aquiring or securing something',
		scenario: {
			1: 'borrow money to purchase',
			2: 'stealing money to purchase',
			3: 'selling personal value to purchase',
			4: 'tricky to acquire',
			5: 'force to acquire',
			6: 'feigning madness to acquire',
			7: 'arbitration to acquire',
			8: 'seduction to acquire',
			9: 'marriage to climb up in status',
			10: 'hard work to acquire',
			11: 'physical struggle to acqurie',
			12: 'deal with the devil'
		},
		common: 56
	},
	{
		drama_id: 13,
		name: 'enmity of kinsmen',
		alias: 'family at war',
		description: 'hostility or opposition within the family/group',
		scenario: {
			1: 'husband-wife',
			2: 'father-son',
			3: 'father-daughter',
			4: 'mother-son',
			5: 'mother-daughter',
			6: 'brother-sister'
		},
		common: null
	},
	{
		drama_id: 14,
		name: 'rivalry of kinsmen',
		alias: 'family rivalry',
		description: 'outside circumstances change the balance of the family',
		scenario: {
			1: 'rivalry for the same lover',
			2: 'rivalry for estate',
			3: 'rivalry for control of family',
			4: 'rivalry of step/inlaw and nuclear family'
		},
		common: 9
	},
	{
		drama_id: 15,
		name: 'murderous adultery',
		alias: 'crimes of passion',
		description: 'crimes of passion',
		scenario: {
			1: 'murder of adulterer',
			2: 'murder by adulterer',
			3: 'murder of lover',
			4: 'murder by lover'
		},
		common: null
	},
	{
		drama_id: 16,
		name: 'altered states',
		alias: 'madness',
		description: 'irrational change in behavior or thinking',
		scenario: {
			1: 'descent into madness',
			2: 'emerging from madness',
			3: 'posession',
			4: 'substance abuse',
			5: 'isolation',
			6: 'mind of madness'
		},
		common: null
	},
	{
		drama_id: 17,
		name: 'fatal imprudence',
		alias: 'the gambler',
		description: 'not respecting the potential consequences of an action',
		scenario: {
			1: 'taking a long shot to avoid certain disaster',
			2: 'making a bad decision that could destroy a life',
			3: 'compromising integrity to catch up',
			4: "i'll do it if you do it"
		},
		common: 50
	},
	{
		drama_id: 19,
		name: 'coincidence',
		alias: null,
		description:
			'remarkable concurrence of events with no apparent causal connection',
		scenario: {
			1: 'wrong place at the wrong time',
			2: 'right place at the right time',
			3: 'right place at the wrong time',
			4: 'wrong place at the right time',
			5: 'fate/destiny'
		},
		common: null
	},
	{
		drama_id: 19,
		name: 'dream state',
		alias: null,
		description:
			'series of subconsciously or surreally linked images or situations',
		scenario: {
			1: 'waking dream',
			2: 'surrealism',
			3: 'formalism',
			4: 'physical manifestation of the subsconcious'
		},
		common: 10
	},
	{
		drama_id: 20,
		name: 'self-sacrifice for idealism',
		alias: null,
		description: 'giving up own interests to help others advance a cause ',
		scenario: {
			1: 'unshakable faith',
			2: 'hedonist discovers cause',
			3: 'love sacrificed for the cause',
			4: 'career sacrificed for the cause'
		},
		common: null
	},
	{
		drama_id: 21,
		name: 'self-sacrifice for family',
		alias: null,
		description: 'sacrificing the self to save the group',
		scenario: {
			1: 'life for a life',
			2: 'life for the family escape',
			3: 'sacrifice career, desire, or future for the good of the family',
			4: 'sacrificing individual moral for success of the family'
		},
		common: 10
	},
	{
		drama_id: 22,
		name: 'everything sacrificed for passion',
		alias: 'desire - obsession - sex',
		description: 'madness of passion or lengths of love',
		scenario: {
			1: 'forbidden love',
			2: 'life ruined for passion',
			3: 'illegal love',
			4: 'loving the enemy',
			5: 'consequences of passion',
			6: 'struggle to contain passion',
			7: 'the birth of passion'
		},
		common: null
	},
	{
		drama_id: 23,
		name: 'necessity of sacrificing loved ones',
		alias: null,
		description: 'more commonly figurative than literal',
		scenario: {
			1: 'mercy killing',
			2: 'sacrifice to save the group',
			3: 'cult murder',
			4: 'honor killing',
			5: 'moral: by having children you intrinsically are sacrificing them to the world and you must let them go to have a good life'
		},
		common: null
	},
	{
		drama_id: 24,
		name: 'rivalry between superior and inferior',
		alias: null,
		description: 'movement or rivavlry between statuses',
		scenario: {
			1: 'student vs master',
			2: 'rich vs poor',
			3: 'company vs startup',
			4: 'king vs noble',
			5: 'conquered vs conqueror'
		},
		common: null
	},
	{
		drama_id: 25,
		name: 'adultery',
		alias: 'betrayal of love',
		description: 'infidelity',
		scenario: {
			1: 'discarded spouse',
			2: 'discarded lover',
			3: 'emotional betrayal'
		},
		common: null
	},
	{
		drama_id: 26,
		name: 'incest',
		alias: null,
		description: 'love or abuse between familial parties',
		scenario: {
			1: 'father-daughter',
			2: 'father-son',
			3: 'brother-sister',
			4: 'mother-son',
			5: 'mother-daughter'
		},
		common: 4
	},
	{
		drama_id: 27,
		name: 'discovery of the dishonour of a loved one',
		alias: null,
		description:
			'discovery or repression of a dark secret in a familial setting',
		scenario: {
			1: 'hiding the secret',
			2: 'sharing the secret',
			3: 'denying the secret',
			4: 'exhile',
			5: 'loss of status',
			6: 'adjustment to new truth'
		},
		common: null
	},
	{
		drama_id: 28,
		name: 'obstacles to love',
		alias: null,
		description: 'reasons that love is impossible',
		scenario: {
			1: 'difference in social status',
			2: 'difference in ambition',
			3: 'familial disapproval',
			4: 'already married',
			5: 'gender',
			6: 'ethnicity',
			7: 'ex-lovers interfere'
		},
		common: 46
	},
	{
		drama_id: 29,
		name: 'an enemy loved',
		alias: null,
		description: 'lovers from groups on opposite sides of a war',
		scenario: {
			1: 'spark peace',
			2: 'flea',
			3: 'tragic end',
			4: 'assimilation of one lover to enemy side',
			5: 'escalation of conflict'
		},
		common: null
	},
	{
		drama_id: 30,
		name: 'ambition',
		alias: null,
		description: 'disregard for others in pursuit of ambition',
		scenario: {
			1: 'rise to power',
			2: 'rise to status',
			3: 'rise to fame',
			4: 'rise to crime',
			5: 'rise to discovery',
			6: 'ends justify the means'
		},
		common: null
	},
	{
		drama_id: 31,
		name: 'conflicts with power',
		alias: null,
		description:
			'successful or unsuccessful struggle against a infinitely powerful entity',
		scenario: {
			1: 'power of deity',
			2: 'power of society',
			3: 'power of dictator',
			4: 'power of system',
			5: 'power of new order',
			6: 'power of corporation',
			7: 'power of money'
		},
		common: 52
	},
	{
		drama_id: 32,
		name: 'mistaken jealousy',
		alias: null,
		description: 'irrational jealousy/suspicion often from insecurity',
		scenario: {
			1: 'suspicion of lover',
			2: 'false rumors',
			3: 'jealousy of new family member',
			4: 'jealousy of friend/groups new friend'
		},
		common: 5
	},
	{
		drama_id: 33,
		name: 'erroneous judgement',
		alias: null,
		description: 'poor judgement stemming from paranoia, suspicion, and guilt',
		scenario: {
			1: 'circumstacial evidence suggests innocent person is guilty',
			2: 'innocent person behaves suspiciously',
			3: 'innocent acts guilty to hide the guilty party',
			4: 'those close accused guilty by association',
			5: 'accused guilty for intending to commit a crime not yet committed',
			6: 'innocent person thinks they are guilty',
			7: 'guilty person thinks they are innocent',
			8: 'witness stays quiet to protect loved one',
			9: 'enemy throws suspicion on innocent party',
			10: 'rival throws suspicion on competitor',
			11: 'struggle to rehabilitate after wrongful conviction'
		},
		common: null
	},
	{
		drama_id: 34,
		name: 'remorse',
		alias: null,
		description: 'deep regret or guilt for a wrongdoing',
		scenario: {
			1: 'remorse for a crime undiscovered',
			2: 'remorse for political crime',
			3: 'remorse for murder undiscovered',
			4: 'remorse for unfaithfulness',
			5: 'remorse for unfulfilled desire',
			6: 'remorse for lost love that could have been'
		},
		common: null
	},
	{
		drama_id: 35,
		name: 'recovery of a lost one',
		alias: null,
		description: 'trying to reunite with a lost loved one against all odds',
		scenario: {
			1: 'seemingly lost forever with no hope of return',
			2: 'beyond death',
			3: 'person abducted',
			4: 'separated by war',
			5: 'separated by natural disaster',
			6: 'forced adoption',
			7: 'separated by apocalypse'
		},
		common: null
	},
	{
		drama_id: 36,
		name: 'loss of a loved one',
		alias: null,
		description: 'the response to the loss of a loved one',
		scenario: {
			1: 'witnessing the death and being powerless to prevent it',
			2: 'politics/secrecy cause the death of loved one',
			3: 'discovery of lost love one through third party',
			4: 'loss of loved one as inciting event',
			5: 'aftermath of loss of loved one',
			6: 'events leading up to loss of loved one'
		},
		common: null
	}
];

module.exports = { test, types, wheel, drama, allyMatrix };
