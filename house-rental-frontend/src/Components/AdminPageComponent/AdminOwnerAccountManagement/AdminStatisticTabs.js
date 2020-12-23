import React, { useEffect, useState } from 'react'
import { apiGetPoster } from '../../../Services/accommodation_poster_services'
import moment from 'moment'
import _ from 'lodash'
import { posterStatisticDataCoverter } from '../../../Helper/satisticDataTransform'
import { Statistic, Tooltip } from 'antd';
import './AdminStatisticTable.css';

const MAX_NUMBER_RECORD = 5

function AdminStatisticTabs() {

    //Fake Data
    const ratePerWeek = [
        {
            "title": "Biệt thự ven Hồ phường 3 quận Phú Nhuận",
            "address": "số 8 ngõ 95/58/12",
            "subDistrict": "Phúc Xá",
            "district": "Ba Đình",
            "city": "Hà Nội",
            "rate": 4.5,
            "statisticNumber": 10,
            "posterId": "5fe0ade609158b4958175dd1",
            "ratingId": "5fe0ade609158b4958175dd0"
        },
        {
            "title": "Biệt thự ven Hồ phường 3 quận Phú Nhuận",
            "address": "số 8 ngõ 95/58/12",
            "subDistrict": "Phúc Xá",
            "district": "Ba Đình",
            "city": "Hà Nội",
            "rate": 0,
            "statisticNumber": 3,
            "posterId": "5fe0addb09158b4958175dc5",
            "ratingId": "5fe0addb09158b4958175dc4"
        },
        {
            "title": "Khu nhà tập thể Thiên Sơn Mộ Tuyết",
            "address": "số 8 ngõ 95/58/12",
            "subDistrict": "Tân Phú",
            "district": "Quận 9",
            "city": "Thành phố Hồ Chí Minh",
            "rate": 5,
            "statisticNumber": 2,
            "posterId": "5fe1b10ecb06643a2488e8af",
            "ratingId": "5fe1b10ecb06643a2488e8ae"
        },
        {
            "title": "Biệt thự ven Hồ phường 3 quận Phú Nhuận",
            "address": "số 8 ngõ 95/58/12",
            "subDistrict": "Phúc Xá",
            "district": "Ba Đình",
            "city": "Hà Nội",
            "rate": 0,
            "statisticNumber": 1,
            "posterId": "5fe0addb09158b4958175dc9",
            "ratingId": "5fe0addb09158b4958175dc8"
        },
        {
            "title": "Biệt thự Hòa Bình",
            "address": "số 8 ngõ 10/9",
            "subDistrict": "Hàng Bồ",
            "district": "Hoàn Kiếm",
            "city": "Hà Nội",
            "rate": 0,
            "statisticNumber": 1,
            "posterId": "5fe1aae621551542fc12d452",
            "ratingId": "5fe1aae621551542fc12d451"
        }
    ]

    const ratePerMonth = [
        {
            "title": "Biệt thự ven Hồ phường 3 quận Phú Nhuận",
            "address": "số 8 ngõ 95/58/12",
            "subDistrict": "Phúc Xá",
            "district": "Ba Đình",
            "city": "Hà Nội",
            "rate": 4.5,
            "statisticNumber": 0,
            "posterId": "5fe0ade609158b4958175dd1",
            "ratingId": "5fe0ade609158b4958175dd0"
        },
        {
            "title": "Biệt thự ven Hồ phường 3 quận Phú Nhuận",
            "address": "số 8 ngõ 95/58/12",
            "subDistrict": "Phúc Xá",
            "district": "Ba Đình",
            "city": "Hà Nội",
            "rate": 0,
            "statisticNumber": 0,
            "posterId": "5fe0addb09158b4958175dc5",
            "ratingId": "5fe0addb09158b4958175dc4"
        },
        {
            "title": "Khu nhà tập thể Thiên Sơn Mộ Tuyết",
            "address": "số 8 ngõ 95/58/12",
            "subDistrict": "Tân Phú",
            "district": "Quận 9",
            "city": "Thành phố Hồ Chí Minh",
            "rate": 5,
            "statisticNumber": 0,
            "posterId": "5fe1b10ecb06643a2488e8af",
            "ratingId": "5fe1b10ecb06643a2488e8ae"
        },
        {
            "title": "Biệt thự ven Hồ phường 3 quận Phú Nhuận",
            "address": "số 8 ngõ 95/58/12",
            "subDistrict": "Phúc Xá",
            "district": "Ba Đình",
            "city": "Hà Nội",
            "rate": 0,
            "statisticNumber": 0,
            "posterId": "5fe0addb09158b4958175dc9",
            "ratingId": "5fe0addb09158b4958175dc8"
        },
        {
            "title": "Biệt thự Hòa Bình",
            "address": "số 8 ngõ 10/9",
            "subDistrict": "Hàng Bồ",
            "district": "Hoàn Kiếm",
            "city": "Hà Nội",
            "rate": 0,
            "statisticNumber": 0,
            "posterId": "5fe1aae621551542fc12d452",
            "ratingId": "5fe1aae621551542fc12d451"
        }
    ]

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
            <div id="data-in-time">
                <h1>Theo tuần</h1>
                <div className="data-row">
                    <div className="statistic-box-wrapper">
                        <p className="statistic-title">Đánh giá</p>
                        <div className="statistic-box">
                            {ratePerWeek.map(value => {
                                return (
                                    <div className="data-row">
                                        <Tooltip title={value.title}>
                                            <div className="room-title">{value.title}</div>
                                        </Tooltip>
                                        <Statistic title="" value={value.rate}/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="statistic-box-wrapper">
                        <p className="statistic-title">Lượt thích</p>
                        <div className="statistic-box">
                            {ratePerWeek.map(value => {
                                return (
                                    <div className="data-row">
                                        <Statistic title="" value={value.rate}/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="statistic-box-wrapper">
                        <p className="statistic-title">Lượt xem</p>
                        <div className="statistic-box">
                            {ratePerWeek.map(value => {
                                return (
                                    <div className="data-row">
                                        <Statistic title="" value={value.rate}/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <div id="data-in-time">
                <h1>Theo tháng</h1>
                <div className="data-row">
                    <div className="statistic-box-wrapper">
                        <p className="statistic-title">Đánh giá</p>
                        <div className="statistic-box">
                            {ratePerMonth.map(value => {
                                return (
                                    <div className="data-row">
                                        <Statistic title="" value={value.rate}/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="statistic-box-wrapper">
                        <p className="statistic-title">Lượt thích</p>
                        <div className="statistic-box">
                            {ratePerMonth.map(value => {
                                return (
                                    <div className="data-row">
                                        <Statistic title="" value={value.rate}/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="statistic-box-wrapper">
                        <p className="statistic-title">Lượt xem</p>
                        <div className="statistic-box">
                            {ratePerMonth.map(value => {
                                return (
                                    <div className="data-row">
                                        <Statistic title="" value={value.rate}/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminStatisticTabs
