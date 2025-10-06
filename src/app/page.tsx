"use client";

import React from "react";
import { GlassmorphicSidebar3 } from "@/ui/components/GlassmorphicSidebar3";
import { Button } from "@/ui/components/Button";
import { Badge } from "@/ui/components/Badge";
import { Calendar } from "@/ui/components/Calendar";
import { Progress } from "@/ui/components/Progress";
import { AreaChart } from "@/ui/components/AreaChart";
import { BarChart } from "@/ui/components/BarChart";
import { Alert } from "@/ui/components/Alert";
import { IconWithBackground } from "@/ui/components/IconWithBackground";
import { Tabs } from "@/ui/components/Tabs";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Navigation Sidebar */}
      <GlassmorphicSidebar3 />
      
      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600 mt-1">Welcome back! Here&apos;s your podcast overview.</p>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              + New Episode
            </Button>
          </div>
        </div>

        {/* Dashboard View Tabs */}
        <div className="mb-6">
          <Tabs 
            defaultValue="overview"
            className="w-full"
          >
            <div className="flex space-x-1 mb-6">
              <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium">
                Overview
              </button>
              <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                Planning
              </button>
              <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                Production
              </button>
              <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                Published
              </button>
            </div>
          </Tabs>
        </div>

        {/* Quick Stats Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="flex items-center">
              <IconWithBackground 
                className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg mr-4"
              />
              <div>
                <p className="text-sm text-gray-600">Episodes in Planning</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
                <Badge className="bg-blue-100 text-blue-800 text-xs">+3 this week</Badge>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="flex items-center">
              <IconWithBackground 
                className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg mr-4"
              />
              <div>
                <p className="text-sm text-gray-600">In Production</p>
                <p className="text-2xl font-bold text-gray-900">8</p>
                <Badge className="bg-orange-100 text-orange-800 text-xs">2 due today</Badge>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="flex items-center">
              <IconWithBackground 
                className="w-12 h-12 bg-green-100 text-green-600 rounded-lg mr-4"
              />
              <div>
                <p className="text-sm text-gray-600">Published</p>
                <p className="text-2xl font-bold text-gray-900">45</p>
                <Badge className="bg-green-100 text-green-800 text-xs">5 this month</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Episode Storyboard Pipeline Overview */}
          <div className="lg:col-span-2 bg-white rounded-lg p-6 shadow-sm border">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Episode Pipeline</h2>
              <Button variant="outline" size="sm">View All</Button>
            </div>
            <AreaChart 
              className="w-full h-64"
              categories={["Episodes"]}
              data={[
                { Stage: 'Planning', Episodes: 12 },
                { Stage: 'Recording', Episodes: 5 },
                { Stage: 'Editing', Episodes: 3 },
                { Stage: 'Published', Episodes: 45 }
              ]}
              index="Stage"
            />
          </div>

          {/* Calendar Integration Widget */}
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Calendar</h2>
            <Calendar className="w-full" />
          </div>

          {/* Goal Progress Trackers */}
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Monthly Goals</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Episodes Published</span>
                  <span className="text-gray-900">5/8</span>
                </div>
                <Progress value={62.5} className="w-full" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Recording Sessions</span>
                  <span className="text-gray-900">12/15</span>
                </div>
                <Progress value={80} className="w-full" />
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Guest Interviews</span>
                  <span className="text-gray-900">3/5</span>
                </div>
                <Progress value={60} className="w-full" />
              </div>
            </div>
          </div>

          {/* Tasks Due Today Section */}
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Tasks Due Today</h2>
              <Badge className="bg-red-100 text-red-800">2 urgent</Badge>
            </div>
            <div className="space-y-3">
              <div className="flex items-center p-3 bg-red-50 rounded-lg border border-red-200">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Edit Episode #47</p>
                  <p className="text-xs text-gray-600">Due in 2 hours</p>
                </div>
              </div>
              <div className="flex items-center p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Review Guest Notes</p>
                  <p className="text-xs text-gray-600">Due today</p>
                </div>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">Upload Episode Art</p>
                  <p className="text-xs text-gray-600">Due tomorrow</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity Feed */}
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
            <div className="space-y-3">
              <Alert className="border-l-4 border-l-blue-500 bg-blue-50 p-3">
                <div className="text-sm">
                  <p className="font-medium text-blue-900">Episode #48 moved to Recording</p>
                  <p className="text-blue-700 text-xs mt-1">2 hours ago</p>
                </div>
              </Alert>
              <Alert className="border-l-4 border-l-green-500 bg-green-50 p-3">
                <div className="text-sm">
                  <p className="font-medium text-green-900">Episode #46 published successfully</p>
                  <p className="text-green-700 text-xs mt-1">5 hours ago</p>
                </div>
              </Alert>
              <Alert className="border-l-4 border-l-purple-500 bg-purple-50 p-3">
                <div className="text-sm">
                  <p className="font-medium text-purple-900">New guest added: Sarah Johnson</p>
                  <p className="text-purple-700 text-xs mt-1">1 day ago</p>
                </div>
              </Alert>
              <Alert className="border-l-4 border-l-orange-500 bg-orange-50 p-3">
                <div className="text-sm">
                  <p className="font-medium text-orange-900">Episode #47 needs review</p>
                  <p className="text-orange-700 text-xs mt-1">2 days ago</p>
                </div>
              </Alert>
            </div>
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="mt-8 flex flex-wrap gap-4">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            + New Episode
          </Button>
          <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
            Add Guest
          </Button>
          <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
            Schedule Recording
          </Button>
          <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
            View Analytics
          </Button>
        </div>
      </div>
    </div>
  );
}
