import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function Dashboard({ auth }: PageProps<{}>) {
    return (
        <>
            <Head title="Dashboard" />

            
            {/* ヘッダー */}
            <header className='bg-white'>
                <div className='max-w-screen-xl mx-auto px-4 sm:px-8 md:px-16 py-3'>
                    <div className='flex justify-between'>
                        <div>
                            ECモール事務局
                        </div>

                        <div>
                            xxxさん
                        </div>
                    </div>
                </div>
            </header>

            <ul className="menu bg-base-200 w-56">
                <li><a>出品者申請一覧</a></li>
                <li><a>出品者一覧</a></li>
                <li>
                    <details open>
                        <summary>Parent</summary>
                        <ul>
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                            <li>
                            <details open>
                                <summary>Parent</summary>
                                <ul>
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                            </li>
                        </ul>
                    </details>
                    <details>
                        <summary>Parent</summary>
                        <ul>
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                            <li>
                            <details>
                                <summary>Parent</summary>
                                <ul>
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                            </li>
                        </ul>
                    </details>
                </li>
                <li><a>Item 3</a></li>
            </ul>
    
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're logged in!</div>
                    </div>
                </div>
            </div>
        </>
    );
}
