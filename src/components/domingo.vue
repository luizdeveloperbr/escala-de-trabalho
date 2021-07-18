<!-- domingo.vue -->
<template>
	<p>{{display}}</p>
</template>
<script>
import moment from 'moment'

moment.locale('pt-br')
	export default {
	name: 'domingo',
	props: ['addWeeks'],
	computed: {
		display() {
			return moment(this.initDate).add(this.addWeeks, 'week').format('L')
		},
        initDate(){
        var day
           if (moment(this.$route.query.mes, 'MMMM').startOf('week').month() !== moment(this.$route.query.mes, 'MMMM').month())
                {
            day = moment(this.$route.query.mes, 'MMMM').startOf('week').add(1, 'w').toDate()
                } else {
            day = moment(this.$route.query.mes, 'MMMM').startOf('week').toDate()
                }
           return day
        },
		W: function()
		{
			return Number(moment(this.display,"DD/MM/YYYY").format('W'))
		},
	},
};
</script>
