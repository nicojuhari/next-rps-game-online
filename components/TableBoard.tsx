import { compareChoices } from "@/lib/game-utils";
import { CheckCircleIcon, XCircleIcon, EqualsIcon, QuestionMarkIcon } from "@phosphor-icons/react";

const TableBoard = ({ yourChoices, secondPlayerChoices, isGameFinished, isOnePlayer} : {
    yourChoices: number[],
    secondPlayerChoices: number[],
    isGameFinished: boolean,
    isOnePlayer?: boolean
}) => { 

    const controlers = {
        1: '🪨',
        2: '📃',
        3: '✂️',
    }
    return (
        <div className="my-6 rounded-lg bg-white border border-gray-100">
            <table className="w-full table-fixed border-collapse player-selected-table">
                <thead>
                    <tr>
                        <th className="font-medium">You</th>
                        { !isOnePlayer ? (<th className="truncate font-medium">2nd Player</th>) : (<th className="truncate font-medium">Computer</th>)}
                        <th className="font-medium">Results</th>
                    </tr>
                </thead>
                <tbody>
                    { [0, 1, 2].map(item => (
                        <tr key={item}>
                            <td>
                                <div className="flex items-center justify-center">
                                    { !isGameFinished ? (
                                        <CheckCircleIcon weight="light" className={`w-6 h-6 transition-all duration-500 ${yourChoices?.[item] ? 'text-green-500' : 'text-gray-300'}`} />
                                ) : (
                                    <div className="h-6">
                                        { controlers[yourChoices[item] as keyof typeof controlers] }
                                    </div>
                                )}
                            
                            </div>
                            </td>
                            <td>
                                <div className="flex items-center justify-center">
                                    { !isGameFinished ? (
                                        <CheckCircleIcon weight="light" className={`w-6 h-6 transition-all duration-500 ${secondPlayerChoices?.[item] ? 'text-green-500' : 'text-gray-300'}`} />
                                    ) : (
                                        <div className="h-6">
                                            { controlers[secondPlayerChoices[item] as keyof typeof controlers] }
                                        </div>
                                    )}
                                </div>
                            </td>
                            <td>
                                <div className="flex items-center justify-center">
                                    { !isGameFinished ? (
                                    <div className="text-gray-300">
                                        <QuestionMarkIcon weight="light" className="w-6 h-6 text-gray-300" />
                                    </div>
                                    ) : (
                                    <div className="h-6">
                                        {compareChoices(yourChoices?.[item], secondPlayerChoices[item]) === 0 && (
                                            <EqualsIcon weight="light" className="w-6 h-6 text-gray-300" />
                                        )}
                                        {compareChoices(yourChoices?.[item], secondPlayerChoices[item]) === 1 && (
                                            <CheckCircleIcon weight="light" className="w-6 h-6 text-green-500" />
                                        )}
                                        {compareChoices(yourChoices?.[item], secondPlayerChoices[item]) === 2 && (
                                            <XCircleIcon weight="light" className="w-6 h-6 text-red-500" />
                                        )}
                                    </div> )}
                                </div>
                            </td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}
 
export default TableBoard;