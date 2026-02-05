// @flow strict
"use client";
import { GitHubCalendar } from 'react-github-calendar';
import { personalData } from '@/utils/data/personal-data';

function GitHubActivity() {
    return (
        <div className="py-8">
            <div className="flex justify-center my-5 lg:py-8">
                <div className="flex  items-center">
                    <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                    <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
                        GitHub Activity
                    </span>
                    <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                </div>
            </div>

            <div className="flex justify-center items-center">
                <GitHubCalendar
                    username={personalData.devUsername}
                    blockSize={15}
                    blockMargin={5}
                    color="cyan-400"
                    fontSize={16}
                />
            </div>
        </div>
    );
};

export default GitHubActivity;
