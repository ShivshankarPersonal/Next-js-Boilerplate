import { useRouter } from 'next/router';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Dashboard - All data in AgGrid"
          description="Grid displays all the data for Analysis and desicion making"
        />
      }
    >
      <div>AgGrid</div>
    </Main>
  );
};

export default Index;
