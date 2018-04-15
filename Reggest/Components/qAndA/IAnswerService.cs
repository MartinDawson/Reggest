using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Reggest.Components.qAndA
{
    public interface IAnswerService
    {
        Answer GetAnswer(int id);
    }
}
