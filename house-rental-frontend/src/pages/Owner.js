import React from 'react';
import Navbar from "../Components/Navbar/Navbar";
import StatisticTable from "../Components/StatisticTable/StatisticTable";
import HeroSection from "../Components/HeroSection/HeroSection";
import OwnerHeroContent from "../Components/HeroSection/OwnerHeroContent/OwnerHeroContent";
import PosterCreator from "../Components/PosterCreator/PosterCreator";
import { aptGetPosterByOwnerId } from '../Services/accommodation_poster_services'

export default function Owner() {

    const ownerHeroImage = "https://bom.to/O9fh378N";

    const ownerId = "5fdc2567ca58ec214050edab";

    const [posterData, setPosterData] = useState([])

    useEffect(() => {
        const fetchDataAsync = async () => {
            const res = await aptGetPosterByOwnerId(ownerId)
            setPosterData(res.posts)
        }
        fetchDataAsync()
    }, [])


    return (
        <div className="owner-page-container">
            <Navbar />
            <HeroSection heroImage={ownerHeroImage}>
                <OwnerHeroContent data={posterData} />
            </HeroSection>
            <StatisticTable data={posterData} ownerId={ownerId} />
            <UserLogin />
        </div>
    )
}