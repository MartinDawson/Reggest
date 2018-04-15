﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Reggest.Components.qAndA
{
    public class Answer
    {
        public int Id { get; set; }
        [Required]
        public string AnswerText { get; set; }
        public int QuestionId { get; set; }
        public Question Question { get; set; }
    }
}
