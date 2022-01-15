import React, { PureComponent } from 'react';

class LoginContainer extends PureComponent {

    render() {
        return (
            <div>
                <h1></h1>
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-4 flex">
                        <div className="m-4">
                            <h3 className="font-bold mb-8">Sign Up</h3>
                            <form className="mb-0 space-y-6" method="POST">
                                <div>
                                    <label for="usernameSignUp" className="block text-sm font-medium text-gray-700">Username</label>
                                    <div>
                                        <input id="usernameSignUp" name="usernameSignUp" required className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
                                    </div>
                                </div>
                                <div>
                                    <label for="passwordSignUp" className="block text-sm font-medium text-gray-700">Password</label>
                                    <div>
                                        <input type="password" id="passwordSignUp" name="passwordSignUp" required className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
                                    </div>
                                </div>
                                <div>
                                    <label for="confirmPasswordSignUp" className="block text-sm font-medium text-gray-700">Confirm password</label>
                                    <div>
                                        <input type="password" id="confirmPasswordSignUp" name="confirmPasswordSignUp" required className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
                                    </div>
                                </div>
                                <div className="flex flex-row justify-center">
                                    <div>
                                        <button type="submit" className="w-30 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-600 focus:ring-offset-2 focus:ring-sky-500">
                                            Sign Up
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="m-4">
                            <h3 className="font-bold mb-8">Sign In</h3>
                            <form className="mb-0 space-y-6" method="POST">
                                <div>
                                    <label for="usernameSignIn" className="block text-sm font-medium text-gray-700">Username</label>
                                    <div>
                                        <input id="usernameSignIn" name="usernameSignIn" required className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                                    </div>
                                </div>
                                <div>
                                    <label for="passwordSignIn" className="block text-sm font-medium text-gray-700">Password</label>
                                    <div>
                                        <input type="password" id="passwordSignIn" name="passwordSignIn" required className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                                    </div>
                                </div>
                                <div className="flex flex-row justify-center">
                                    <div>
                                        <button type="submit" className="w-30 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 focus:ring-offset-2 focus:ring-indigo-500">
                                            Sign In
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default LoginContainer;