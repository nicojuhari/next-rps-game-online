import { compareChoices } from "@/lib/game-utils";
import { CheckCircleIcon, XCircleIcon, EqualsIcon, QuestionMarkIcon } from "@phosphor-icons/react";

const TableBoard = ({
    yourChoices,
    secondPlayerChoices,
    isGameFinished,
    isOnePlayer,
}: {
    yourChoices: number[];
    secondPlayerChoices: number[];
    isGameFinished: boolean;
    isOnePlayer?: boolean;
}) => {
    const controlers = {
        1: "🪨",
        2: "📃",
        3: "✂️",
    };
    return (
        <div className="mt-4 md:mt-6 rounded-md bg-gray-100/5">
            <table className="w-full table-fixed border-collapse player-selected-table">
                <thead>
                    <tr className="text-gray-300">
                        <th className="font-light">You</th>
                        {!isOnePlayer ? (
                            <th className="truncate font-light">2nd Player</th>
                        ) : (
                            <th className="truncate font-light">Computer</th>
                        )}
                        <th className="font-light">Results</th>
                    </tr>
                </thead>
                <tbody>
                    {[0, 1, 2].map((item) => (
                        <tr key={item}>
                            <td>
                                <div className="flex items-center justify-center">
                                    {yourChoices?.[item] == null ? (
                                        <div className="text-gray-400">
                                            <CheckCircleIcon weight="light" className="w-6 h-6 transition-all duration-500 text-gray-400" />
                                        </div>
                                    ) : (
                                        <div className="h-6">{controlers[yourChoices[item] as keyof typeof controlers]}</div>
                                    )}
                                </div>
                            </td>
                            <td>
                                <div className="flex items-center justify-center">
                                    {!isGameFinished ? (
                                        <CheckCircleIcon
                                            weight="light"
                                            className={`w-6 h-6 transition-all duration-500 ${
                                                secondPlayerChoices?.[item] ? "text-green-400" : "text-gray-400"
                                            }`}
                                        />
                                    ) : (
                                        <div className="h-6">{controlers[secondPlayerChoices[item] as keyof typeof controlers]}</div>
                                    )}
                                </div>
                            </td>
                            <td>
                                <div className="flex items-center justify-center">
                                    {!isGameFinished ? (
                                        <div className="text-gray-300">
                                            <QuestionMarkIcon weight="light" className="w-6 h-6 text-gray-400" />
                                        </div>
                                    ) : (
                                        <div className="h-6">
                                            {compareChoices(yourChoices?.[item], secondPlayerChoices[item]) === 0 && (
                                                <EqualsIcon weight="light" className="w-6 h-6 text-gray-200" />
                                            )}
                                            {compareChoices(yourChoices?.[item], secondPlayerChoices[item]) === 1 && (
                                                <CheckCircleIcon weight="light" className="w-6 h-6 text-green-400" />
                                            )}
                                            {compareChoices(yourChoices?.[item], secondPlayerChoices[item]) === 2 && (
                                                <XCircleIcon weight="light" className="w-6 h-6 text-red-500" />
                                            )}
                                        </div>
                                    )}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableBoard;
