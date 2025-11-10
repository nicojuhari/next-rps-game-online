import { compareChoices } from "@/lib/game-utils";
import { CheckIcon, XIcon, EqualsIcon } from "@phosphor-icons/react";

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
        <table className="w-full table-fixed border-collapse player-selected-table">
            <thead>
                <tr>
                    <th>You</th>
                    { !isOnePlayer ? (<th className="truncate">2nd Player</th>) : (<th className="truncate">Computer</th>)}
                    <th></th>
                </tr>
            </thead>
            <tbody>
                { [0, 1, 2].map(item => (
                    <tr key={item}>
                        <td>
                            <div className="flex items-center justify-center">
                                { !isGameFinished ? (
                                    <CheckIcon className={`w-6 h-6 transition-all duration-500 ${yourChoices?.[item] ? 'text-green-600' : 'text-gray-400'}`} />
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
                                    <CheckIcon className={`w-6 h-6 transition-all duration-500 ${secondPlayerChoices?.[item] ? 'text-green-600' : 'text-gray-400'}`} />
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
                                <div className="text-gray-300"> ? </div>
                                ) : (
                                <div className="h-6">
                                    {compareChoices(yourChoices?.[item], secondPlayerChoices[item]) === 0 && (
                                        <EqualsIcon className="w-6 h-6 text-gray-400" />
                                    )}
                                    {compareChoices(yourChoices?.[item], secondPlayerChoices[item]) === 1 && (
                                        <CheckIcon className="w-6 h-6 text-green-600" />
                                    )}
                                    {compareChoices(yourChoices?.[item], secondPlayerChoices[item]) === 2 && (
                                        <XIcon className="w-6 h-6 text-red-600" />
                                    )}
                                </div> )}
                            </div>
                        </td>
                    </tr>
                    ))
                }
            </tbody>
        </table>
    );
}
 
export default TableBoard;