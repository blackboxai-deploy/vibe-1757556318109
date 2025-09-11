"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, BookOpen, Code2, Users, Target } from "lucide-react";
import { slides } from "@/lib/slides-data";

export default function JavaPresentation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-800">Programación Orientada a Objetos - Java</h1>
          </div>
          <div className="text-sm text-gray-600">
            Diapositiva {currentSlide + 1} de {slides.length}
          </div>
        </div>

        {/* Main Slide */}
        <Card className="mb-6 shadow-xl border-0 bg-white/90 backdrop-blur-sm">
          <CardContent className="p-8 md:p-12">
            {/* Slide Content */}
            <div className="min-h-[500px] flex flex-col justify-center">
              {currentSlideData.type === 'title' && (
                <div className="text-center space-y-8">
                  <div className="mb-8">
                    <h1 className="text-5xl font-bold text-gray-800 mb-4 leading-tight">
                      {currentSlideData.title}
                    </h1>
                    {currentSlideData.subtitle && (
                      <p className="text-2xl text-blue-600 font-medium">
                        {currentSlideData.subtitle}
                      </p>
                    )}
                  </div>
                  {currentSlideData.author && (
                    <div className="space-y-2 text-gray-600">
                      <p className="text-lg">{currentSlideData.author}</p>
                      <p className="text-base">{currentSlideData.institution}</p>
                      <p className="text-base">{currentSlideData.date}</p>
                    </div>
                  )}
                </div>
              )}

              {currentSlideData.type === 'content' && (
                <div className="space-y-6">
                  <h2 className="text-4xl font-bold text-gray-800 mb-8">
                    {currentSlideData.title}
                  </h2>
                  
                  {currentSlideData.content && (
                    <div className="space-y-4">
                      {currentSlideData.content.map((item, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                          <p className="text-lg text-gray-700 leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {currentSlideData.code && (
                    <div className="bg-gray-900 rounded-lg p-6 mt-6">
                      <pre className="text-green-400 font-mono text-sm overflow-x-auto">
                        <code>{currentSlideData.code}</code>
                      </pre>
                    </div>
                  )}

                  {currentSlideData.diagram && (
                    <div className="bg-blue-50 rounded-lg p-6 mt-6 border-2 border-blue-200">
                      <div className="text-center text-gray-700">
                        <div className="text-lg font-semibold mb-4">{currentSlideData.diagram.title}</div>
                        <div className="space-y-2">
                          {currentSlideData.diagram.elements.map((element, index) => (
                            <div key={index} className="p-3 bg-white rounded border-l-4 border-blue-500">
                              {element}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {currentSlideData.comparison && (
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      <div className="bg-red-50 rounded-lg p-6 border-2 border-red-200">
                        <h3 className="text-xl font-semibold text-red-700 mb-4 flex items-center">
                          <span className="mr-2">❌</span> {currentSlideData.comparison.before.title}
                        </h3>
                        <ul className="space-y-2">
                          {currentSlideData.comparison.before.points.map((point, index) => (
                            <li key={index} className="text-red-600">{point}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-green-50 rounded-lg p-6 border-2 border-green-200">
                        <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center">
                          <span className="mr-2">✅</span> {currentSlideData.comparison.after.title}
                        </h3>
                        <ul className="space-y-2">
                          {currentSlideData.comparison.after.points.map((point, index) => (
                            <li key={index} className="text-green-600">{point}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {currentSlideData.exercise && (
                    <div className="bg-amber-50 rounded-lg p-6 mt-6 border-2 border-amber-200">
                      <h3 className="text-xl font-semibold text-amber-700 mb-4 flex items-center">
                        <Code2 className="mr-2 h-5 w-5" />
                        {currentSlideData.exercise.title}
                      </h3>
                      <p className="text-amber-800 mb-4">{currentSlideData.exercise.description}</p>
                      {currentSlideData.exercise.code && (
                        <div className="bg-gray-900 rounded p-4">
                          <pre className="text-green-400 font-mono text-sm">
                            <code>{currentSlideData.exercise.code}</code>
                          </pre>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {currentSlideData.type === 'hook' && (
                <div className="text-center space-y-8">
                  <div className="text-6xl mb-6">🤔</div>
                  <h2 className="text-4xl font-bold text-gray-800 mb-6">
                    {currentSlideData.title}
                  </h2>
                  <p className="text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                    {currentSlideData.question}
                  </p>
                  {currentSlideData.context && (
                    <div className="mt-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                      <p className="text-lg text-blue-800">{currentSlideData.context}</p>
                    </div>
                  )}
                </div>
              )}

              {currentSlideData.type === 'objectives' && (
                <div className="space-y-8">
                  <div className="text-center">
                    <Target className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                    <h2 className="text-4xl font-bold text-gray-800">
                      {currentSlideData.title}
                    </h2>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    {currentSlideData.objectives?.map((objective, index) => (
                      <div key={index} className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                            {index + 1}
                          </div>
                          <p className="text-gray-700 text-lg">{objective}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Button
            onClick={prevSlide}
            variant="outline"
            className="flex items-center space-x-2"
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Anterior</span>
          </Button>

          {/* Slide indicators */}
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <Button
            onClick={nextSlide}
            variant="outline"
            className="flex items-center space-x-2"
            disabled={currentSlide === slides.length - 1}
          >
            <span>Siguiente</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Speaker Notes */}
        {currentSlideData.speakerNotes && (
          <Card className="mt-6 bg-yellow-50 border-yellow-200">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3 flex items-center">
                <Users className="mr-2 h-5 w-5" />
                Notas del Presentador
              </h3>
              <p className="text-yellow-700 leading-relaxed">
                {currentSlideData.speakerNotes}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}