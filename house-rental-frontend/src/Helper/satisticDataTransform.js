import moment from 'moment'
import _ from 'lodash'

const posterStatisticDataCoverter = (postersList) => {
    const statisticPosterData = []
    postersList.forEach(poster => {
        const { rating } = poster
        const { rate, likedUser, visits } = rating

        const likedUserGroupByDay = _.groupBy(likedUser, o => moment(o.time).format('YYYY/MM/DD'))

        const likedUserGroupByWeek = _.groupBy(likedUser, o => moment(o.time).format('YYYY/MM/WW'))

        const likedUserGroupByMonth = _.groupBy(likedUser, o => moment(o.time).format('YYYY/MM'))

        const visitGroupByDay = _.groupBy(visits, o => moment(o).format('YYYY/MM/DD'))

        const visitGroupByWeek = _.groupBy(visits, o => moment(o).format('YYYY/MM/WW'))

        const visitGroupByMonth = _.groupBy(visits, o => moment(o).format('YYYY/MM'))

        const posterAnalysticData = {
            posterId: poster._id,
            ratingId: rating._id,
            title: poster.title,
            address: poster.address,
            subDistrict: poster.subDistrict,
            district: poster.district,
            city: poster.city,
            rate: rate,
            totalLikes: likedUser.length,
            totalVisits: visits.length,
            likePerDay: likedUserGroupByDay,
            likePerWeek: likedUserGroupByWeek,
            likePerMonth: likedUserGroupByMonth,
            visitPerDay: visitGroupByDay,
            visitPerWeek: visitGroupByWeek,
            visitPerMonth: visitGroupByMonth
        }
        statisticPosterData.push(posterAnalysticData)
    })
    return statisticPosterData
}



export {
    posterStatisticDataCoverter
}