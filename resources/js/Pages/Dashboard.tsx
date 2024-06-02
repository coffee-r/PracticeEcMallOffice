import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { Seller } from '@/types/seller';
import BasicLayout from '@/Layouts/BasicLayout';

export default function SellerIndex({ auth }: PageProps<{}>) {
    return (
        <>
            <Head title="ダッシュボード" />
            <BasicLayout user={auth.user}>
                <h1 className="font-semibold text-lg md:text-2xl">ダッシュボード</h1>
            </BasicLayout>
        </>
    );
}
