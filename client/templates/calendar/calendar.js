var calendario = {
	rows: [
		{
			columns: [
				{"dia": 28, "mes": 8, "disable": "bg-default", "active_day": ""},
				{"dia": 29, "mes": 8, "disable": "bg-default", "active_day": ""},
				{"dia": 30, "mes": 8, "disable": "bg-default", "active_day": ""},
				{"dia": 31, "mes": 8, "disable": "bg-default", "active_day": ""},
				{"dia": 1, "mes": 9, "disable": "", "active_day": ""},
				{"dia": 2, "mes": 9, "disable": "", "active_day": ""},
				{"dia": 3, "mes": 9, "disable": "", "active_day": ""}
			]
		},
		{
			columns: [
				{"dia": 4, "mes": 9, "disable": "", "active_day": ""},
				{"dia": 5, "mes": 9, "disable": "", "active_day": ""},
				{"dia": 6, "mes": 9, "disable": "", "active_day": ""},
				{"dia": 7, "mes": 9, "disable": "", "active_day": ""},
				{"dia": 8, "mes": 9, "disable": "", "active_day": ""},
				{"dia": 9, "mes": 9, "disable": "", "active_day": ""},
				{"dia": 10, "mes": 9, "disable": "", "active_day": ""}
			]
		},
		{
			columns: [
				{"dia": 11, "mes": 9, "disable": "", "active_day": ""},
				{"dia": 12, "mes": 9, "disable": "", "active_day": ""},
				{"dia": 13, "mes": 9, "disable": "", "active_day": ""},
				{"dia": 14, "mes": 9, "disable": "", "active_day": ""},
				{"dia": 15, "mes": 9, "disable": "", "active_day": ""},
				{"dia": 16, "mes": 9, "disable": "", "active_day": ""},
				{"dia": 17, "mes": 9, "disable": "", "active_day": ""}
			]
		},
		{
			columns: [
				{"dia": 18, "mes": 9, "disable": "", "active_day": ""},
				{"dia": 19, "mes": 9, "disable": "", "active_day": ""},
				{"dia": 20, "mes": 9, "disable": "", "active_day": ""},
				{"dia": 21, "mes": 9, "disable": "", "active_day": ""},
				{"dia": 22, "mes": 9, "disable": "", "active_day": ""},
				{"dia": 23, "mes": 9, "disable": "", "active_day": ""},
				{"dia": 24, "mes": 9, "disable": "", "active_day": ""}
			]
		},
		{
			columns: [
				{"dia": 25, "mes": 9, "disable": "", "active_day": ""},
				{"dia": 26, "mes": 9, "disable": "", "active_day": "bg-primary"},
				{"dia": 27, "mes": 9, "disable": "", "active_day": ""},
				{"dia": 28, "mes": 9, "disable": "", "active_day": ""},
				{"dia": 29, "mes": 9, "disable": "", "active_day": ""},
				{"dia": 30, "mes": 9, "disable": "", "active_day": ""},
				{"dia": 1, "mes": 8, "disable": "bg-default", "active_day": ""}
			]
		},
		{
			columns: [
				{"dia": 2, "mes": 8, "disable": "bg-default", "active_day": ""},
				{"dia": 3, "mes": 8, "disable": "bg-default", "active_day": ""},
				{"dia": 4, "mes": 8, "disable": "bg-default", "active_day": ""},
				{"dia": 5, "mes": 8, "disable": "bg-default", "active_day": ""},
				{"dia": 6, "mes": 8, "disable": "bg-default", "active_day": ""},
				{"dia": 7, "mes": 8, "disable": "bg-default", "active_day": ""},
				{"dia": 8, "mes": 8, "disable": "bg-default", "active_day": ""}
			]
		}
	]
}

Template.calendar.helpers({
	rows: function() {
		return calendario.rows
	}
});