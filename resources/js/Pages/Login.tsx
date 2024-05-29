import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function Login({ auth }: PageProps<{}>) {

    return (
        <>
            <Head title="ログイン" />
            <div className="relative flex flex-col justify-center h-screen overflow-hidden">
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-lg">
                    <h1 className="text-3xl font-semibold text-center text-purple-700">ECモール事務局</h1>
                    <form className="space-y-4">
                        <div>
                            <label className="label">
                                <span className="text-base label-text">オペレーターコード</span>
                            </label>
                            <input type="text" placeholder="Email Address" className="w-full input input-bordered input-primary" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base label-text">パスワード</span>
                            </label>
                            <input type="password" placeholder="Enter Password" className="w-full input input-bordered input-primary" />
                        </div>
                        <div>
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
