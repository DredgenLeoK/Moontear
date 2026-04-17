import Interests from '@/components/Interests/Interest';
import styles from './page.module.css';
import ProfileHeader from '@/components/ProfileHeader/ProfileHeader';
import VinylGallery from '@/components/VinylGallery/VinylGallery';
import MemoryFragments from '@/components/MemoryFragments/MemoryFragments';

export default function Home() {
  return (
    <div className={styles.container}>
      <ProfileHeader />
      <main>
        <MemoryFragments />
        <VinylGallery />
        <Interests />
      </main>
    </div>
  );
}