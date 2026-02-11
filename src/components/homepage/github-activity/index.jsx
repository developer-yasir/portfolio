// @flow strict
"use client";
import { GitHubCalendar } from 'react-github-calendar';
import { personalData } from '@/utils/data/personal-data';

function GitHubActivity() {
    const username = personalData.devUsername;

    return (
        <div className="py-8">
            <div className="flex justify-center my-5 lg:py-8">
                <div className="flex items-center">
                    <span className="w-24 h-[2px] bg-[var(--card-border)]"></span>
                    <span className="bg-[var(--card-bg)] w-fit text-[var(--text-primary)] p-2 px-5 text-xl rounded-md border border-[var(--card-border)] transition-colors">
                        GitHub Contributions
                    </span>
                    <span className="w-24 h-[2px] bg-[var(--card-border)]"></span>
                </div>
            </div>

            {/* Contribution Calendar */}
            <div className="flex justify-center items-center bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6">
                <div className="w-full overflow-x-auto">
                    <GitHubCalendar
                        username={username}
                        blockSize={12}
                        blockMargin={4}
                        fontSize={14}
                        colorScheme="light"
                        style={{
                            color: 'var(--text-primary)'
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default GitHubActivity;
