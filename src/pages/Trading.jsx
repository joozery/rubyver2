import Navbar from '../components/Navbar';
import TradingConditions from '../components/TradingConditions';
import TradeMoreSection from '../components/TradeMoreSection';
import StayConfidentSection from '../components/StayConfidentSection';
import TakeControlSection from '../components/TakeControlSection';
import FocusOnTradeSection from '../components/FocusOnTradeSection';
import ThreeStepsSection from '../components/ThreeStepsSection';
import GlobalMovementSection from '../components/GlobalMovementSection';
import TradingFooter from '../components/TradingFooter';

const Trading = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main className="-mt-[81px] pt-[81px]">
                <TradingConditions />
                <TradeMoreSection />
                <StayConfidentSection />
                <TakeControlSection />
                <FocusOnTradeSection />
                <ThreeStepsSection />
                <GlobalMovementSection />
            </main>
            <TradingFooter />
        </div>
    );
};

export default Trading;
