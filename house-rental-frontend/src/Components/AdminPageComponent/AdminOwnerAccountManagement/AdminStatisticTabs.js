import React, { useEffect, useState } from 'react'
import { apiGetPoster } from '../../../Services/accommodation_poster_services'
import moment from 'moment'
import _ from 'lodash'
import { posterStatisticDataCoverter } from '../../../Helper/satisticDataTransform'


const MAX_NUMBER_RECORD = 5

function AdminStatisticTabs() {

    const [postersList, setPosterList] = useState([])

    const [posterStatisticData, setPosterStatisticData] = useState([])

    const [locationStatisticData, setLocationStatisticData] = useState([])

    const [bestPosterOfWeek, setBestPosterOfWeek] = useState([])
    const [bestPosterOfMonth, setBestPosterOfMonth] = useState([])
    const [trendingOfWeek, setTrendingOfWeek] = useState([])
    const [trendingOfMonth, setTrendingOfMonth] = useState([])
    const [topLikedPoster, setTopLikedPoster] = useState([])
    const [topVisitedPoster, setTopVisitedPoster] = useState([])

    useEffect(() => {
        const fetchAsyncData = async () => {
            const res = await apiGetPoster()
            setPosterList(res.posts)
            const posters = res.posts
            const posterStatisticData = posterStatisticDataCoverter(posters)
            setPosterStatisticData(posterStatisticData)
            const theBestOfWeek = getSortedLikedAnalysticData(posterStatisticData, 'YYYY/MM/WW', 'likePerWeek')
            setBestPosterOfWeek(theBestOfWeek)
            const theBestOfMonth = getSortedLikedAnalysticData(posterStatisticData, 'YYYY/MM', 'likePerMonth')
            setBestPosterOfMonth(theBestOfMonth)
            const weekyTrending = getSortedLikedAnalysticData(posterStatisticData, 'YYYY/MM/WW', 'visitPerWeek')
            setTrendingOfWeek(weekyTrending)
            const monthlyTrending = getSortedLikedAnalysticData(posterStatisticData, 'YYYY/MM/WW', 'visitPerMonth')
            setTrendingOfMonth(monthlyTrending)
            const posterSortedByLikes = posters
                .sort((a, b) => {
                    return b.rating.likedUser.length - a.rating.likedUser.length
                })
                .slice(0, MAX_NUMBER_RECORD)
                .map(poster => {
                    const { title, address, subDistrict, district, city, rate, posterId, rating } = poster
                    const ratingId = rating._id
                    return { title, address, subDistrict, district, city, rate, posterId, ratingId, statisticNumber: poster.rating.likedUser.length }
                })
            setTopLikedPoster(posterSortedByLikes)

            const posterSortedByVisits = posters
                .sort((a, b) => {
                    return b.rating.visits.length - a.rating.visits.length
                })
                .slice(0, MAX_NUMBER_RECORD)
                .map(poster => {
                    const { title, address, subDistrict, district, city, rate, rating } = poster
                    const ratingId = rating._id
                    const posterId = poster._id
                    return { title, address, subDistrict, district, city, rate, posterId, ratingId, statisticNumber: poster.rating.visits.length }
                })
            setTopVisitedPoster(posterSortedByVisits)

            // console.log(posterSortedByVisits)
            // console.log('like week', theBestOfWeek)
            // console.log('like month', theBestOfMonth)
            // console.log('visit week', weekyTrending)
            // console.log('visit month', monthlyTrending)
        }
        fetchAsyncData()
    }, [])

    const getSortedLikedAnalysticData = (posterStatisticData, format, feild) => {
        const theBest = posterStatisticData
            .sort((a, b) => {
                const likePerWeekOfFirstPost = a[feild][moment(Date.now()).format(format)]
                const likePerWeekOfSecondPost = b[feild][moment(Date.now()).format(format)]
                const temp1 = likePerWeekOfFirstPost ? likePerWeekOfFirstPost.length : 0
                const temp2 = likePerWeekOfSecondPost ? likePerWeekOfSecondPost.length : 0
                return temp2 - temp1
            })
            .slice(0, MAX_NUMBER_RECORD)
            .map(post => {
                const { title, address, subDistrict, district, city, rate, posterId, ratingId } = post
                const statisticArray = post[feild][moment(Date.now()).format(format)]
                const statisticNumber = statisticArray ? statisticArray.length : 0
                return { title, address, subDistrict, district, city, rate, statisticNumber, posterId, ratingId }
            })

        return theBest
    }

    return (
        <div>

        </div>
    )
}

export default AdminStatisticTabs
