import Banner from "./Banner/Banner";
import FeaturedJobs from "./FeaturedJobsCard/FeaturedJobs";
import JobCategoryList from "./JobCategoryListCard/JobCategoryList";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobCategoryList></JobCategoryList>
            <FeaturedJobs></FeaturedJobs>
      </div>
    );
};

export default Home;