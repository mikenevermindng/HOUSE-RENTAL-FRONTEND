import React from 'react';
import { Row, Col } from 'antd';
import PosterCard from "./PosterCard/PosterCard";

function PosterCardContainer() {
    const data = [
        {
            searchingKeyWord: [],
            images: [],
            postedDate: "2020-12-16T13:24:45.378Z",
            status: "available",
            availableDate: [],
            isApproved: false,
            _id: "5fda10c3b4da690d101de80f",
            avaliableDate: [
                "2020-12-03T13:45:53.579Z",
                "2020-12-18T13:45:53.579Z"
            ],
            title: "18020877 vxvx",
            city: "Phòng trọ",
            district: "Phòng trọ",
            subDistrict: "Phòng trọ",
            address: "erwrewew",
            typeOfAccommodation: "chung cư mini",
            numberOfRoom: 12313,
            pricePerMonth: 12,
            pricePerQuarter: null,
            pricePerYear: null,
            area: 1132132,
            description: "Tiếng Việt (chữ Nôm: 㗂tiếng越Việt), cũng gọi là tiếng Việt Nam (㗂越南),[5] tiếng Kinh (㗂京) hay Việt ngữ (越語) là ngôn ngữ của người Việt và là ngôn ngữ chính thức tại Việt Nam. Đây là tiếng mẹ đẻ của khoảng 85% dân cư Việt Nam cùng với hơn 4 triệu Việt kiều. Tiếng Việt còn là ngôn ngữ thứ hai của các dân tộc thiểu số tại Việt Nam và là ngôn ngữ dân tộc thiểu số tại Cộng hòa Séc.\n\nHiến pháp nước Cộng hòa xã hội chủ nghĩa Việt Nam 2013, tại Chương I Điều 5 Mục 3, ghi tiếng Việt là ngôn ngữ quốc gia của Việt Nam.[6] Hiện chưa có bất kỳ văn bản nào ở cấp nhà nước quy định giọng chuẩn và quốc tự của tiếng Việt.[7] Phần lớn các văn bản tiếng Việt ở Việt Nam được viết theo \"Quy định về chính tả tiếng Việt và về thuật ngữ tiếng Việt\" áp dụng cho các sách giáo khoa, báo và văn bản của ngành giáo dục nêu tại Quyết định của Bộ Giáo dục số 240/QĐ ngày 5 tháng 3 năm 1984[8] do những người thụ hưởng giáo dục đó sau này ra làm việc trong mọi lĩnh vực xã hội hướng tới việc chuẩn hóa chính tả tiếng Việt.\n\nDù tiếng Việt có lượng lớn từ vựng chuyển hoá từ tiếng Hán thành âm Hán Việt và từ Hán Việt nhưng dựa trên ngữ pháp và vốn từ căn bản, ngôn ngữ này thuộc ngữ hệ Nam Á và có số người nói nhiều nhất (nhiều hơn 1 số lần so với các ngôn ngữ khác cùng hệ cộng lại). Hiện tại ở Việt Nam, tiếng Việt chủ yếu sử dụng chữ Quốc ngữ (chữ Latinh) để viết, còn chữ Hán và chữ Nôm biểu ý được dùng chủ yếu bởi cộng đồng người Kinh ở Trung Quốc.[9] Tại Việt Nam chữ Hán và chữ Nôm được sử dụng ít hơn, thường trong các hoạt động liên quan tới văn hóa truyền thống như viết thư pháp, viết sớ hay dựng câu đối.\n\nTránh nhầm lẫn với Việt ngữ (粵語) hay tiếng Quảng Đông sử dụng ở miền nam Trung Quốc (Quảng Đông, Quảng Tây) cũng như ở Hồng Kông và Ma Cao.\n\nTổ chức tiêu chuẩn hóa quốc tế đặt mã ngôn ngữ hai chữ cái cho tiếng Việt là \"vi\" (tiêu chuẩn ISO 639-1) và đặt mã ngôn ngữ ba chữ cái cho tiếng Việt là \"vie\" (tiêu chuẩn ISO 639-2).[10][11][12]",
            ownerId: "5fda10c3b4da690d101de80e",
            name: "Rye",
            rating: {
                rate: 5,
                likedUser: [
                    "5fd827c26c982835a08b9487"
                ],
                visits: [],
                _id: "5fda10c3b4da690d101de80e",
                ratedTime: [
                    {
                        isApproved: false,
                        _id: "5fdb20459523fa0544b5d7cc",
                        time: "2020-12-17T09:09:25.804Z",
                        stars: 5,
                        userId: "5fd827c26c982835a08b9487",
                        comment: "Tốt"
                    }
                ],
                __v: 23
            },
            materialFacilities: {
                other: [],
                _id: "5fda10c3b4da690d101de80d",
                bathroom: "close",
                electricWaterHeater: true,
                kitchen: "closed",
                airConditioner: true,
                balcony: true,
                bed: true,
                fridge: true,
                washingMachine: true,
                wardrobe: true,
                electricityPrice: 1300,
                domesticWaterPrice: 5000,
                __v: 0
            },
            __v: 0
        },
        {
            searchingKeyWord: [],
            images: [],
            postedDate: "2020-12-16T13:24:45.378Z",
            status: "available",
            availableDate: [],
            isApproved: false,
            _id: "5fda10c3b4da690d101de80f",
            avaliableDate: [
                "2020-12-03T13:45:53.579Z",
                "2020-12-18T13:45:53.579Z"
            ],
            title: "Capsule Hanoi Penthouse, view đẹp khắp trung tâm Hà Nội, tiện đi lại.",
            city: "Hà Nội",
            district: "Ba Đình",
            subDistrict: "Ngọc Hà",
            address: "Ba Đình, Hà Nội, Vietnam",
            typeOfAccommodation: "nhà nguyên căn",
            numberOfRoom: 4,
            pricePerMonth: 5000000,
            pricePerQuarter: 16000000,
            pricePerYear: null,
            area: 35,
            description: "Phòng Penthouse, yên tĩnh, view đẹp an ninh và đầy đủ tiện nghi. Gần Lăng Bác cùng các địa điểm du lịch và khu ẩm thực phố cổ Hà Nội\n" +
                "\n" +
                "Di chuyển dễ dàng: Từ sân bay Nội Bài có chuyến xe bus số 90 (30p/chuyến) đến thẳng bến xe Kim Mã (cuối bến) Sau đó bạn đi bộ 10p là đến địa điểm Capsule Hanoi! Bạn có thể đi Grab đến thẳng địa chỉ 160 Ngọc Hà\n" +
                "\n" +
                "Phòng giường lớn 2-4 người, có thêm giường phụ! Ban công nhìn ra sân vườn, wifi, máy giặt free, nhà xe riêng biệt\n" +
                "\n" +
                "- Địa điểm cách Lăng Bác (100m).\n" +
                "\n" +
                "- Hồ Tây 1km! Đền Quan Thánh - chùa Trấn Quốc - Phủ Tây Hồ 1km!\n" +
                "\n" +
                "- Hoàng Thành Thăng Long - Chùa Một Cột 1.5km!\n" +
                "\n" +
                "- Phố Cổ Hà Nội - khu ẩm thực Tạ Hiện - Hồ Gươm - Kem Tràng Tiền - Phố đi bộ 3-4km!\n" +
                "\n" +
                "Chủ nhà thân thiện trực 24/24, có dịch vụ thuê xe máy, gần bãi gửi xe oto.",
            ownerId: "5fda10c3b4da690d101de80e",
            name: "Rye",
            rating: {
                rate: 10,
                likedUser: [
                    "5fd827c26c982835a08b9487",
                    "5fd827c26c982835a08b9487",
                    "5fd827c26c982835a08b9487",
                    "5fd827c26c982835a08b9487"
                ],
                visits: ['a', 'b', 'c'],
                _id: "5fda10c3b4da690d101de80e",
                ratedTime: [
                    {
                        isApproved: false,
                        _id: "5fdb20459523fa0544b5d7cc",
                        time: "2020-12-17T09:09:25.804Z",
                        stars: 5,
                        userId: "5fd827c26c982835a08b9487",
                        comment: "Tốt"
                    },
                    {
                        isApproved: false,
                        _id: "5fdb20459523fa0544b5d7cc",
                        time: "2020-12-17T09:09:25.804Z",
                        stars: 3.5,
                        userId: "5fd827c26c982835a08b9487",
                        comment: "Nice"
                    },
                    {
                        isApproved: false,
                        _id: "5fdb20459523fa0544b5d7cc",
                        time: "2020-12-17T09:09:25.804Z",
                        stars: 2,
                        userId: "5fd827c26c982835a08b9487",
                        comment: "Dở. Không quay lại abcxyz"
                    }
                ],
                __v: 23
            },
            materialFacilities: {
                other: [],
                _id: "5fda10c3b4da690d101de80d",
                bathroom: "close",
                electricWaterHeater: true,
                kitchen: "closed",
                airConditioner: true,
                balcony: true,
                bed: true,
                fridge: true,
                washingMachine: true,
                wardrobe: true,
                electricityPrice: 1300,
                domesticWaterPrice: 5000,
                __v: 0
            },
            __v: 0
        },
        {
            searchingKeyWord: [],
            images: [],
            postedDate: "2020-12-16T13:24:45.378Z",
            status: "available",
            availableDate: [],
            isApproved: false,
            _id: "5fda10c3b4da690d101de80f",
            avaliableDate: [
                "2020-12-03T13:45:53.579Z",
                "2020-12-18T13:45:53.579Z"
            ],
            title: "Capsule Hanoi Penthouse, view đẹp khắp trung tâm Hà Nội, tiện đi lại.",
            city: "Hà Nội",
            district: "Ba Đình",
            subDistrict: "Ngọc Hà",
            address: "Ba Đình, Hà Nội, Vietnam",
            typeOfAccommodation: "nhà nguyên căn",
            numberOfRoom: 4,
            pricePerMonth: 5000000,
            pricePerQuarter: 16000000,
            pricePerYear: null,
            area: 35,
            description: "Phòng Penthouse, yên tĩnh, view đẹp an ninh và đầy đủ tiện nghi. Gần Lăng Bác cùng các địa điểm du lịch và khu ẩm thực phố cổ Hà Nội\n" +
                "\n" +
                "Di chuyển dễ dàng: Từ sân bay Nội Bài có chuyến xe bus số 90 (30p/chuyến) đến thẳng bến xe Kim Mã (cuối bến) Sau đó bạn đi bộ 10p là đến địa điểm Capsule Hanoi! Bạn có thể đi Grab đến thẳng địa chỉ 160 Ngọc Hà\n" +
                "\n" +
                "Phòng giường lớn 2-4 người, có thêm giường phụ! Ban công nhìn ra sân vườn, wifi, máy giặt free, nhà xe riêng biệt\n" +
                "\n" +
                "- Địa điểm cách Lăng Bác (100m).\n" +
                "\n" +
                "- Hồ Tây 1km! Đền Quan Thánh - chùa Trấn Quốc - Phủ Tây Hồ 1km!\n" +
                "\n" +
                "- Hoàng Thành Thăng Long - Chùa Một Cột 1.5km!\n" +
                "\n" +
                "- Phố Cổ Hà Nội - khu ẩm thực Tạ Hiện - Hồ Gươm - Kem Tràng Tiền - Phố đi bộ 3-4km!\n" +
                "\n" +
                "Chủ nhà thân thiện trực 24/24, có dịch vụ thuê xe máy, gần bãi gửi xe oto.",
            ownerId: "5fda10c3b4da690d101de80e",
            name: "Rye",
            rating: {
                rate: 10,
                likedUser: [
                    "5fd827c26c982835a08b9487",
                    "5fd827c26c982835a08b9487",
                    "5fd827c26c982835a08b9487",
                    "5fd827c26c982835a08b9487"
                ],
                visits: ['a', 'b', 'c'],
                _id: "5fda10c3b4da690d101de80e",
                ratedTime: [
                    {
                        isApproved: false,
                        _id: "5fdb20459523fa0544b5d7cc",
                        time: "2020-12-17T09:09:25.804Z",
                        stars: 5,
                        userId: "5fd827c26c982835a08b9487",
                        comment: "Tốt"
                    },
                    {
                        isApproved: false,
                        _id: "5fdb20459523fa0544b5d7cc",
                        time: "2020-12-17T09:09:25.804Z",
                        stars: 3.5,
                        userId: "5fd827c26c982835a08b9487",
                        comment: "Nice"
                    },
                    {
                        isApproved: false,
                        _id: "5fdb20459523fa0544b5d7cc",
                        time: "2020-12-17T09:09:25.804Z",
                        stars: 2,
                        userId: "5fd827c26c982835a08b9487",
                        comment: "Dở. Không quay lại abcxyz"
                    }
                ],
                __v: 23
            },
            materialFacilities: {
                other: [],
                _id: "5fda10c3b4da690d101de80d",
                bathroom: "close",
                electricWaterHeater: true,
                kitchen: "closed",
                airConditioner: true,
                balcony: true,
                bed: true,
                fridge: true,
                washingMachine: true,
                wardrobe: true,
                electricityPrice: 1300,
                domesticWaterPrice: 5000,
                __v: 0
            },
            __v: 0
        },
        {
            searchingKeyWord: [],
            images: [],
            postedDate: "2020-12-16T13:24:45.378Z",
            status: "available",
            availableDate: [],
            isApproved: false,
            _id: "5fda10c3b4da690d101de80f",
            avaliableDate: [
                "2020-12-03T13:45:53.579Z",
                "2020-12-18T13:45:53.579Z"
            ],
            title: "Capsule Hanoi Penthouse, view đẹp khắp trung tâm Hà Nội, tiện đi lại.",
            city: "Hà Nội",
            district: "Ba Đình",
            subDistrict: "Ngọc Hà",
            address: "Ba Đình, Hà Nội, Vietnam",
            typeOfAccommodation: "nhà nguyên căn",
            numberOfRoom: 4,
            pricePerMonth: 5000000,
            pricePerQuarter: 16000000,
            pricePerYear: null,
            area: 35,
            description: "Phòng Penthouse, yên tĩnh, view đẹp an ninh và đầy đủ tiện nghi. Gần Lăng Bác cùng các địa điểm du lịch và khu ẩm thực phố cổ Hà Nội\n" +
                "\n" +
                "Di chuyển dễ dàng: Từ sân bay Nội Bài có chuyến xe bus số 90 (30p/chuyến) đến thẳng bến xe Kim Mã (cuối bến) Sau đó bạn đi bộ 10p là đến địa điểm Capsule Hanoi! Bạn có thể đi Grab đến thẳng địa chỉ 160 Ngọc Hà\n" +
                "\n" +
                "Phòng giường lớn 2-4 người, có thêm giường phụ! Ban công nhìn ra sân vườn, wifi, máy giặt free, nhà xe riêng biệt\n" +
                "\n" +
                "- Địa điểm cách Lăng Bác (100m).\n" +
                "\n" +
                "- Hồ Tây 1km! Đền Quan Thánh - chùa Trấn Quốc - Phủ Tây Hồ 1km!\n" +
                "\n" +
                "- Hoàng Thành Thăng Long - Chùa Một Cột 1.5km!\n" +
                "\n" +
                "- Phố Cổ Hà Nội - khu ẩm thực Tạ Hiện - Hồ Gươm - Kem Tràng Tiền - Phố đi bộ 3-4km!\n" +
                "\n" +
                "Chủ nhà thân thiện trực 24/24, có dịch vụ thuê xe máy, gần bãi gửi xe oto.",
            ownerId: "5fda10c3b4da690d101de80e",
            name: "Rye",
            rating: {
                rate: 10,
                likedUser: [
                    "5fd827c26c982835a08b9487",
                    "5fd827c26c982835a08b9487",
                    "5fd827c26c982835a08b9487",
                    "5fd827c26c982835a08b9487"
                ],
                visits: ['a', 'b', 'c'],
                _id: "5fda10c3b4da690d101de80e",
                ratedTime: [
                    {
                        isApproved: false,
                        _id: "5fdb20459523fa0544b5d7cc",
                        time: "2020-12-17T09:09:25.804Z",
                        stars: 5,
                        userId: "5fd827c26c982835a08b9487",
                        comment: "Tốt"
                    },
                    {
                        isApproved: false,
                        _id: "5fdb20459523fa0544b5d7cc",
                        time: "2020-12-17T09:09:25.804Z",
                        stars: 3.5,
                        userId: "5fd827c26c982835a08b9487",
                        comment: "Nice"
                    },
                    {
                        isApproved: false,
                        _id: "5fdb20459523fa0544b5d7cc",
                        time: "2020-12-17T09:09:25.804Z",
                        stars: 2,
                        userId: "5fd827c26c982835a08b9487",
                        comment: "Dở. Không quay lại abcxyz"
                    }
                ],
                __v: 23
            },
            materialFacilities: {
                other: [],
                _id: "5fda10c3b4da690d101de80d",
                bathroom: "close",
                electricWaterHeater: true,
                kitchen: "closed",
                airConditioner: true,
                balcony: true,
                bed: true,
                fridge: true,
                washingMachine: true,
                wardrobe: true,
                electricityPrice: 1300,
                domesticWaterPrice: 5000,
                __v: 0
            },
            __v: 0
        },
        {
            searchingKeyWord: [],
            images: [],
            postedDate: "2020-12-16T13:24:45.378Z",
            status: "available",
            availableDate: [],
            isApproved: false,
            _id: "5fda10c3b4da690d101de80f",
            avaliableDate: [
                "2020-12-03T13:45:53.579Z",
                "2020-12-18T13:45:53.579Z"
            ],
            title: "Capsule Hanoi Penthouse, view đẹp khắp trung tâm Hà Nội, tiện đi lại.",
            city: "Hà Nội",
            district: "Ba Đình",
            subDistrict: "Ngọc Hà",
            address: "Ba Đình, Hà Nội, Vietnam",
            typeOfAccommodation: "nhà nguyên căn",
            numberOfRoom: 4,
            pricePerMonth: 5000000,
            pricePerQuarter: 16000000,
            pricePerYear: null,
            area: 35,
            description: "Phòng Penthouse, yên tĩnh, view đẹp an ninh và đầy đủ tiện nghi. Gần Lăng Bác cùng các địa điểm du lịch và khu ẩm thực phố cổ Hà Nội\n" +
                "\n" +
                "Di chuyển dễ dàng: Từ sân bay Nội Bài có chuyến xe bus số 90 (30p/chuyến) đến thẳng bến xe Kim Mã (cuối bến) Sau đó bạn đi bộ 10p là đến địa điểm Capsule Hanoi! Bạn có thể đi Grab đến thẳng địa chỉ 160 Ngọc Hà\n" +
                "\n" +
                "Phòng giường lớn 2-4 người, có thêm giường phụ! Ban công nhìn ra sân vườn, wifi, máy giặt free, nhà xe riêng biệt\n" +
                "\n" +
                "- Địa điểm cách Lăng Bác (100m).\n" +
                "\n" +
                "- Hồ Tây 1km! Đền Quan Thánh - chùa Trấn Quốc - Phủ Tây Hồ 1km!\n" +
                "\n" +
                "- Hoàng Thành Thăng Long - Chùa Một Cột 1.5km!\n" +
                "\n" +
                "- Phố Cổ Hà Nội - khu ẩm thực Tạ Hiện - Hồ Gươm - Kem Tràng Tiền - Phố đi bộ 3-4km!\n" +
                "\n" +
                "Chủ nhà thân thiện trực 24/24, có dịch vụ thuê xe máy, gần bãi gửi xe oto.",
            ownerId: "5fda10c3b4da690d101de80e",
            name: "Rye",
            rating: {
                rate: 10,
                likedUser: [
                    "5fd827c26c982835a08b9487",
                    "5fd827c26c982835a08b9487",
                    "5fd827c26c982835a08b9487",
                    "5fd827c26c982835a08b9487"
                ],
                visits: ['a', 'b', 'c'],
                _id: "5fda10c3b4da690d101de80e",
                ratedTime: [
                    {
                        isApproved: false,
                        _id: "5fdb20459523fa0544b5d7cc",
                        time: "2020-12-17T09:09:25.804Z",
                        stars: 5,
                        userId: "5fd827c26c982835a08b9487",
                        comment: "Tốt"
                    },
                    {
                        isApproved: false,
                        _id: "5fdb20459523fa0544b5d7cc",
                        time: "2020-12-17T09:09:25.804Z",
                        stars: 3.5,
                        userId: "5fd827c26c982835a08b9487",
                        comment: "Nice"
                    },
                    {
                        isApproved: false,
                        _id: "5fdb20459523fa0544b5d7cc",
                        time: "2020-12-17T09:09:25.804Z",
                        stars: 2,
                        userId: "5fd827c26c982835a08b9487",
                        comment: "Dở. Không quay lại abcxyz"
                    }
                ],
                __v: 23
            },
            materialFacilities: {
                other: [],
                _id: "5fda10c3b4da690d101de80d",
                bathroom: "close",
                electricWaterHeater: true,
                kitchen: "closed",
                airConditioner: true,
                balcony: true,
                bed: true,
                fridge: true,
                washingMachine: true,
                wardrobe: true,
                electricityPrice: 1300,
                domesticWaterPrice: 5000,
                __v: 0
            },
            __v: 0
        },
        {
            searchingKeyWord: [],
            images: [],
            postedDate: "2020-12-16T13:24:45.378Z",
            status: "available",
            availableDate: [],
            isApproved: false,
            _id: "5fda10c3b4da690d101de80f",
            avaliableDate: [
                "2020-12-03T13:45:53.579Z",
                "2020-12-18T13:45:53.579Z"
            ],
            title: "Capsule Hanoi Penthouse, view đẹp khắp trung tâm Hà Nội, tiện đi lại.",
            city: "Hà Nội",
            district: "Ba Đình",
            subDistrict: "Ngọc Hà",
            address: "Ba Đình, Hà Nội, Vietnam",
            typeOfAccommodation: "nhà nguyên căn",
            numberOfRoom: 4,
            pricePerMonth: 5000000,
            pricePerQuarter: 16000000,
            pricePerYear: null,
            area: 35,
            description: "Phòng Penthouse, yên tĩnh, view đẹp an ninh và đầy đủ tiện nghi. Gần Lăng Bác cùng các địa điểm du lịch và khu ẩm thực phố cổ Hà Nội\n" +
                "\n" +
                "Di chuyển dễ dàng: Từ sân bay Nội Bài có chuyến xe bus số 90 (30p/chuyến) đến thẳng bến xe Kim Mã (cuối bến) Sau đó bạn đi bộ 10p là đến địa điểm Capsule Hanoi! Bạn có thể đi Grab đến thẳng địa chỉ 160 Ngọc Hà\n" +
                "\n" +
                "Phòng giường lớn 2-4 người, có thêm giường phụ! Ban công nhìn ra sân vườn, wifi, máy giặt free, nhà xe riêng biệt\n" +
                "\n" +
                "- Địa điểm cách Lăng Bác (100m).\n" +
                "\n" +
                "- Hồ Tây 1km! Đền Quan Thánh - chùa Trấn Quốc - Phủ Tây Hồ 1km!\n" +
                "\n" +
                "- Hoàng Thành Thăng Long - Chùa Một Cột 1.5km!\n" +
                "\n" +
                "- Phố Cổ Hà Nội - khu ẩm thực Tạ Hiện - Hồ Gươm - Kem Tràng Tiền - Phố đi bộ 3-4km!\n" +
                "\n" +
                "Chủ nhà thân thiện trực 24/24, có dịch vụ thuê xe máy, gần bãi gửi xe oto.",
            ownerId: "5fda10c3b4da690d101de80e",
            name: "Rye",
            rating: {
                rate: 10,
                likedUser: [
                    "5fd827c26c982835a08b9487",
                    "5fd827c26c982835a08b9487",
                    "5fd827c26c982835a08b9487",
                    "5fd827c26c982835a08b9487"
                ],
                visits: ['a', 'b', 'c'],
                _id: "5fda10c3b4da690d101de80e",
                ratedTime: [
                    {
                        isApproved: false,
                        _id: "5fdb20459523fa0544b5d7cc",
                        time: "2020-12-17T09:09:25.804Z",
                        stars: 5,
                        userId: "5fd827c26c982835a08b9487",
                        comment: "Tốt"
                    },
                    {
                        isApproved: false,
                        _id: "5fdb20459523fa0544b5d7cc",
                        time: "2020-12-17T09:09:25.804Z",
                        stars: 3.5,
                        userId: "5fd827c26c982835a08b9487",
                        comment: "Nice"
                    },
                    {
                        isApproved: false,
                        _id: "5fdb20459523fa0544b5d7cc",
                        time: "2020-12-17T09:09:25.804Z",
                        stars: 2,
                        userId: "5fd827c26c982835a08b9487",
                        comment: "Dở. Không quay lại abcxyz"
                    }
                ],
                __v: 23
            },
            materialFacilities: {
                other: [],
                _id: "5fda10c3b4da690d101de80d",
                bathroom: "close",
                electricWaterHeater: true,
                kitchen: "closed",
                airConditioner: true,
                balcony: true,
                bed: true,
                fridge: true,
                washingMachine: true,
                wardrobe: true,
                electricityPrice: 1300,
                domesticWaterPrice: 5000,
                __v: 0
            },
            __v: 0
        }
    ]

    return (
        <div className="poster-card-container">
            <Row>
                {data.map((roomCard) => {
                    return (
                        <Col xs={24} sm={24} md={12} lg={8}>
                            <PosterCard data={roomCard}/>
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}

export default PosterCardContainer;