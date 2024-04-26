import { Slot } from 'expo-router';
import { RewardProvider } from '../context/rewardContext';

export default function Layout() {
    return  (
        <RewardProvider>
          <Slot />
        </RewardProvider>
    )

}
  