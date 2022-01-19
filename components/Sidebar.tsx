import {
    CheckCircleIcon, CogIcon, LogoutIcon, UserCircleIcon
} from "@heroicons/react/outline"
import { signOut } from "next-auth/react"

function Sidebar() {
    return (
        <div className="h-screen text-gray-500 p-3 text-xs bg-white bg-opacity-5 lg:text-sm border-r border-gray-900" >
            <div className="flex flex-col justify-center items-center space-y-4">
                <button className="space-x-2 hover:text-white">
                    <UserCircleIcon className="w-12 h-12"/>
                </button>
                <hr className="h-0.2 w-12  border-special_gray-center" />
                <button className="space-x-2 hover:text-white">
                    <CheckCircleIcon className="w-8 h-8"/>
                </button>
                <button className="space-x-2 hover:text-white">
                    <CheckCircleIcon className="w-8 h-8"/>
                </button>
                <hr className="h-0.2 w-12  border-special_gray-center" />
                <button className="space-x-2 hover:text-white">
                    <CogIcon className="w-8 h-8"/>
                </button>
                <button className="space-x-2 hover:text-white" onClick={() => signOut()}>
                    <LogoutIcon className="w-8 h-8"/>
                </button>
            </div>
        </div>
    )
}

export default Sidebar
